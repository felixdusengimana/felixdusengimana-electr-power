import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TokenCheck from '../pages/TokenCheck';

test('Buy Check page', () => {
    render(<TokenCheck />, {wrapper: MemoryRouter});
    
    const buttonElement = screen.getByText(/Buy Other Token?/i);
    expect(buttonElement).toBeInTheDocument();
});


test("Check Electricty Passes", () => {
    render(<TokenCheck />, {wrapper: MemoryRouter});

    const inputElement = screen.getByTestId("meter_number_input")
    inputElement.value = "1000"
    
    const buttonElement = screen.getByText("Check Token")
    buttonElement.click()
    
    const errorMessage = screen.getByTitle("Error")
    
    expect(errorMessage).toBeInTheDocument();
})