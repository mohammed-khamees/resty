import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './../App';

test('renders App component', () => {
	render(<App />);
	const header = screen.getByText(`RESTy`);
	expect(header).toBeInTheDocument();
	const footer = screen.getByText(/2021 Code Fellows/i);
	expect(footer).toBeInTheDocument();
});
