import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';

describe('visit routes', () => {
  const sampleId = 'qu-cIoRt8Y4ZeQdCuOr4l';

  it('visit home and redirect to /products link', () => {
    cy.visit(URL_ROOT);
    cy.location('pathname').should('equal', `${URL_ROOT + URL_PRODUCTS}`);
  });

  it('visit sample item', () => {
    cy.visit(`${URL_ROOT + URL_PRODUCTS}/${sampleId}`);
  });

  it('check breadcrumbs links function', () => {
    cy.get('nav')
      .contains(/products/i)
      .click();
    cy.location('pathname').should('equal', `${URL_ROOT + URL_PRODUCTS}`);
  });
});
