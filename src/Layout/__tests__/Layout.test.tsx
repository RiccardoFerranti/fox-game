import { screen } from '@testing-library/react';

import Layout from '../Layout';

import renderWithProvider, { routerConfig } from '../../../testUtils';

describe('Layout', () => {
  const LayoutComponent = () => <Layout><div>test</div></Layout>;
  const renderView = () =>  renderWithProvider(<LayoutComponent />, routerConfig);
  

  it('should render the children properly', () => {
    renderView();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
  
  it('should render the title properly', () => {
    renderView();
    expect(screen.getByText('Click the Fox! Game')).toBeInTheDocument();
  });
});
