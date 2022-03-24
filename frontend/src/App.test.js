import { render, screen } from '@testing-library/react';
import App from './App';

describe('should render homepage contents.', () => { 

    it('renders Your patner in paying electricity.', () => {
        render(<App />)
        const textElement = screen.getByText(/Your patner in paying electricity./i);
        expect(textElement).toBeInTheDocument();
    });
})
