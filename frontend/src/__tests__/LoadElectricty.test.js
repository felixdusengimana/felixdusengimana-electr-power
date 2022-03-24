import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CheckBalance from '../pages/CheckBalance';

test('Buy Load Electricty page', () => {
    render(<CheckBalance />, {wrapper: MemoryRouter});
    
    const buttonElement = screen.getByText(/All rights reserved/i);
    expect(buttonElement).toBeInTheDocument();
});
