import { URL_LANDING } from '../../src/routes/routeURL';
import mockedItemDetail from '../../src/__tests__/__mocks__/mockedItemDetail';

describe('visit routes', () => {
  it('visit home', () => {
    cy.visit(URL_LANDING);
  });

  it('visit sample item', () => {
    cy.visit(`${URL_LANDING}/${mockedItemDetail.id}`);
  });
});
