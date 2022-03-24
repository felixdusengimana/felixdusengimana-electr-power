import { render, screen } from '@testing-library/react';
import TokenCheck from '../pages/TokenCheck';

test('Buy Check page', () => {
    render(<>
        <TokenCheck/>
    </>);
    
    const buttonElement = screen.getByText(/Check Token/i);
    expect(buttonElement).toBeInTheDocument();
});


test("Check Electricty Passes", () => {
    render(<>
        <Check/>
    </>);
    
    const inputElement = screen.getByTestId("meter_number_input")
    inputElement.value = "1000"
    
    const buttonElement = screen.getByText("Check Token")
    buttonElement.click()
    
    const errorMessage = screen.getByTitle("Error")
    
    expect(errorMessage).toBeInTheDocument();
})