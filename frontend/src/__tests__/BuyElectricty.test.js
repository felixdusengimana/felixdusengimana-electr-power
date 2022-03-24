import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BuyElectricity from "../pages/Buying";

test('Buy Electricty page', () => {
    render(<BuyElectricity />, {wrapper: MemoryRouter});
    
    const linkElement = screen.getByText(/Buy Electricty/i);
    
    expect(linkElement).toBeInTheDocument();
});

