// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-if';
import { URL_PRODUCTS, URL_ROOT, URL_NOT_FOUND } from '../../src/routes/routeURL';

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
    cy.window().its('sessionStorage').invoke('getItem', 'persist.app');
  });

  it('check local storage', () => {
    cy.window().its('localStorage').invoke('getItem', 'persist:cart');
  });

  it('go to 404 not found page', () => {
    cy.visit(`${URL_ROOT}invalid-url`);
    cy.contains(/error/i);
  })
});
