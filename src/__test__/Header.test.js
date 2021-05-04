import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './../components/Header';

test('renders Header component', () => {
	render(<Header />);
	const linkElement = screen.getByText(`RESTy`);
	expect(linkElement).toBeInTheDocument();
});
