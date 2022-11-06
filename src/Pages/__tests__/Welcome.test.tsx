import { fireEvent, screen } from '@testing-library/react';

import Welcome from '../Welcome';

import renderWithProvider, { routerConfig } from '../../../testUtils';

describe('Welcome', () => {
  const renderView = () => renderWithProvider(<Welcome />, routerConfig);

  it('should render properly the input field `name` and the `next` button', () => {
    renderView();

    expect(screen.getByText(/name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText('user-input-name')).toBeInTheDocument();
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/next/i)).toBeInTheDocument();
  });
  
  it('should render properly the `name` and the `play` button', () => {
    renderView();

    const inputField = screen.getByLabelText('user-input-name');

    // it renders the input field
    expect(screen.getByText(/name:/i)).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    
    // the field is filled and the Next button is clicked
    const mockedUsername = 'testName'
    fireEvent.change(inputField, { target: { value: mockedUsername } })
    fireEvent.click(screen.getByRole('button'));
    
    // it renders now the Name typed and the play button 
    const username = screen.getByTestId('username-label');
    expect(screen.getByTestId('username-label')).toHaveTextContent(`Hello ${mockedUsername}`);
    expect(screen.getByText(/click over the name to change it/i)).toBeInTheDocument();
    expect(screen.getByText(/or/i)).toBeInTheDocument();
    expect(screen.getByText(/click play button to start the game/i)).toBeInTheDocument();
    expect(screen.getByText(/play!/i)).toBeInTheDocument();
    
    // after the click on the label it renders again the input field
    fireEvent.click(username)
    expect(screen.getByText(/name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText('user-input-name')).toBeInTheDocument();
  });
});
