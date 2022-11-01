import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';
import mockedItemDetail from '../../src/tests/__mocks__/mockedItemDetail';

describe('visit routes', () => {
  it('visit home and redirect to /products link', () => {
    cy.visit(URL_ROOT);
    cy.location('pathname').should('equal', `${URL_ROOT + URL_PRODUCTS}`);
  });

  it('visit sample item', () => {
    cy.visit(`${URL_ROOT + URL_PRODUCTS}/${mockedItemDetail.id}`);
  });

  it('check breadcrumbs links function', () => {
    cy.get('nav')
      .contains(/products/i)
      .click();
    cy.location('pathname').should('equal', `${URL_ROOT + URL_PRODUCTS}`);
  });
});
