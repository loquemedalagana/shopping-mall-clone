// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-if';

import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';
import { APP_KEY, APP__CART_COUNT_KEY } from '../../src/env';
import { mockedItemDetail } from '../../src/tests/__mocks__/mockedFetchedData';
import {
  CLASSNAME__TOTAL_COUNT_OF_PROTUCTS__IN_CART,
  NAME__TOTAL_COUNT_OF_PROTUCTS__IN_CART,
} from '../../src/components/header/constants';
import { REST_API_URL__ADD_TO_CART, REST_API__BASE } from '../../src/http/restApiURL';

describe('e2e test for product detail page', () => {
  const sampleId = mockedItemDetail.id;
  const ADD_TO_CART = 'add-to-cart';

  beforeEach(() => {
    cy.intercept('POST', `${REST_API__BASE}${REST_API_URL__ADD_TO_CART}`).as(ADD_TO_CART);
  });

  it('to visit the product detail', () => {
    cy.visit(`${URL_ROOT + URL_PRODUCTS}/${sampleId}`);
    cy.wait(2000);
  });

  it('check session storage', () => {
    cy.window().its('sessionStorage').invoke('getItem', sampleId).should('include', JSON.stringify(mockedItemDetail));
  });

  it('should add a cart', () => {
    const payload = {
      id: mockedItemDetail.id,
      colorCode: mockedItemDetail.options.colors[0].code,
      storageCode: mockedItemDetail.options.storages[0].code,
    };
    cy.get('button').contains(/add/i).click();
    cy.window()
      .its('store')
      .invoke('getState')
      .its('cart')
      .its('loading')
      .if()
      .should('eq', true)
      .else()
      .log('the response was already loaded');

    cy.wait(`@${ADD_TO_CART}`).its('response.body').should('have.property', 'count');
  });

  it(`check breadcrumbs links function and search`, () => {
    cy.get('nav')
      .contains(/products/i)
      .click();
    cy.location('pathname').should('equal', `${URL_ROOT + URL_PRODUCTS}`);
  });

  it('check count number is maintained', () => {
    cy.wait(1000);
    cy.get(`#${NAME__TOTAL_COUNT_OF_PROTUCTS__IN_CART}`)
      .if()
      .get(`.${CLASSNAME__TOTAL_COUNT_OF_PROTUCTS__IN_CART}`)
      .invoke('text')
      .then(parseInt)
      .should('be.gt', 0);
  });
});
