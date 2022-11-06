// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-if';

import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';
import { APP_KEY, APP__CART_COUNT_KEY } from '../../src/env';
import { mockedItemDetail } from '../../src/tests/__mocks__/mockedFetchedData';

describe('e2e test for product detail page', () => {
  const sampleId = mockedItemDetail.id;

  beforeEach(() => {
    cy.visit(`${URL_ROOT + URL_PRODUCTS}/${sampleId}`);
  });

  it('check breadcrumbs links function', () => {
    cy.get('nav')
      .contains(/products/i)
      .click();
    cy.location('pathname').should('equal', `${URL_ROOT + URL_PRODUCTS}`);
  });

  it('check session storage', () => {
    cy.window()
      .its('sessionStorage')
      .invoke('getItem', APP_KEY)
      .should('include', sampleId)
      .should('include', JSON.stringify(mockedItemDetail));
  });
});
