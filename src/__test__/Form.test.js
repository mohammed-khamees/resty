import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './../components/Form';

const setup = () => {
	const form = render(<Form />);
	const input = form.getByLabelText('URL:');
	const input2 = form.getByLabelText('Get');
	return {
		input,
		input2,
		...form,
	};
};

test('renders Form component', async () => {
	const { input, input2 } = setup();
	fireEvent.change(input, {
		target: { value: 'http://swapi.dev/api/people/?page=2' },
	});
	expect(input.value).toBe('http://swapi.dev/api/people/?page=2');
	fireEvent.change(input2, {
		target: { value: 'GET' },
	});
	expect(input2.value).toBe('GET');
});
