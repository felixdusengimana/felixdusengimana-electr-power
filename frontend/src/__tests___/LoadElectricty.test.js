import { render, screen } from '@testing-library/react';
import CheckBalance from '../pages/CheckBalance';

test('Buy Load Electricty page', () => {
    render(<>
        <CheckBalance />
    </>);
    
    const buttonElement = screen.getByText(/Check Balance/i);
    expect(buttonElement).toBeInTheDocument();
});
