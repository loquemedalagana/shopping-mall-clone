// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-if';
import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';

describe('visit routes', () => {
  it('visit home and redirect to /products link', () => {
    cy.visit(URL_ROOT);
    cy.wait(3000);
    cy.location('pathname').should('equal', `${URL_ROOT + URL_PRODUCTS}`);
  });

  it('check breadcrumbs links function', () => {
    cy.get('nav').contains(/home/i);
  });


  it('check session storage', () => {
    cy.window()
      .its('sessionStorage')
      .invoke('getItem', 'persist.app')
  });
});
