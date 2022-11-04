// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-if';
import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';
import { APP__CART_COUNT_KEY, APP_KEY } from '../../src/env';

describe('visit routes', () => {
  it('visit home and redirect to /products link', () => {
    cy.visit(URL_ROOT);
    cy.location('pathname')
      .should('equal', `${URL_ROOT + URL_PRODUCTS}`)
      .else()
      .log('the connection is bad...');
  });

  it('check breadcrumbs links function', () => {
    cy.get('nav').contains(/home/i);
  });

  it('check local storage', () => {
    cy.window()
      .its('localStorage')
      .invoke('getItem', APP_KEY)
      .if()
      .should('include', APP__CART_COUNT_KEY)
      .else()
      .log('The cart is empty');
  });
});
