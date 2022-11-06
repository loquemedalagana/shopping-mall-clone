// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-if';

import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';
import { APP_KEY, APP__PRODUCT_LIST_KEY } from '../../src/env';
import { mockedItemList } from '../../src/tests/__mocks__/mockedFetchedData';

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
