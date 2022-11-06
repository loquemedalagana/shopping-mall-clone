// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-if';

import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';
import { APP_KEY, APP__PRODUCT_LIST_KEY } from '../../src/env';
import { mockedItemList } from '../../src/tests/__mocks__/mockedFetchedData';
import { NAME__SEARCH_INPUT__BRAND } from '../../src/components/search/constants';
import { brandKeyword } from '../../src/tests/__mocks__/mockedSearchKeywords';

describe('e2e test for product list page', () => {
  it('visit e2e test page', () => {
    cy.visit(URL_ROOT);
    cy.location('pathname').should('equal', `${URL_ROOT + URL_PRODUCTS}`);
  });

  it('check the loading state', () => {
    cy.get('#item-loading').else().log('data is already loaded or still in the initial state');
  });

  it('check session storage', () => {
    cy.window()
      .its('sessionStorage')
      .invoke('getItem', APP_KEY)
      .should('include', APP__PRODUCT_LIST_KEY)
      .should('include', JSON.stringify(mockedItemList));
  });
});

describe('to test search function', () => {
  beforeEach(() => {
    cy.visit(URL_ROOT);
  });

  it('to get a search element with brand keywords', () => {
    const reg = new RegExp(brandKeyword, 'i');
    cy.get(`#${NAME__SEARCH_INPUT__BRAND}`).if().type(brandKeyword);
    cy.window().its('store').invoke('getState').its('productList').its('loading').should('eq', true);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    cy.window()
      .its('store')
      .invoke('getState')
      .its('productList')
      .its('data')
      .should(
        'deep.equal',
        mockedItemList.filter(data => reg.test(data.brand)),
      );
  });
});
