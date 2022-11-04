// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-if';

import { URL_PRODUCTS, URL_ROOT } from '../../src/routes/routeURL';
import { APP_KEY, APP__CART_COUNT_KEY } from '../../src/env';

describe('e2e test for product detail page', () => {
  const sampleId = 'qu-cIoRt8Y4ZeQdCuOr4l';

  it('visit sample item', () => {
    cy.visit(`${URL_ROOT + URL_PRODUCTS}/${sampleId}`);
  });

  it('check session storage', () => {
    cy.window().its('sessionStorage').invoke('getItem', APP_KEY).should('include', sampleId);
  });
});
