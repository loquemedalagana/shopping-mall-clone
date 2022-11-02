import { useLocation } from 'react-router-dom';
import { render, screen, renderHook } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import BreadCrumbs from 'src/components/header/BreadCrumbs';
import ProviderForTests from 'src/tests/utils/ProviderForTests';
import mockedItemList from 'src/tests/__mocks__/mockedItemList';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: `/products/${mockedItemList[0].id}`,
  }),
}));

describe('renders breadcrumbs correctly', () => {
  it('render texts based on routes', () => {
    mockAllIsIntersecting(true);
    renderHook(() => useLocation());

    render(
      <ProviderForTests>
        <BreadCrumbs />
      </ProviderForTests>,
    );

    const homeLinkElement = screen.getByText(/home/i);
    expect(homeLinkElement).toBeInTheDocument();

    const productsLinkElement = screen.getByText(/products/i);
    expect(productsLinkElement).toBeInTheDocument();

    const itemLinkElement = screen.getByText(mockedItemList[0].id);
    expect(itemLinkElement).toBeInTheDocument();
  });
});
