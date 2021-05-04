import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './../components/Footer';

test('renders Footer component', () => {
	render(<Footer />);
	const linkElement = screen.getByText(/2021 Code Fellows/i);
	expect(linkElement).toBeInTheDocument();
});
