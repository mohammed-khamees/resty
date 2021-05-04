import React from 'react';
import './../style/Form.scss';

const Form = ({ handler }) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let method = e.target.method.value;
			const raw = await fetch(e.target.url.value, {
				method: method,
				headers: {
					'Content-type': 'application/json',
				},
			});

			const data = await raw.json();

			handler(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="request">
			<form onSubmit={handleSubmit}>
				<label htmlFor="url">URL: </label>
				<input
					type="url"
					name="url"
					id="url"
					placeholder="Enter request URL"
					required
				/>
				<div className="btns">
					<input
						type="radio"
						name="method"
						className="method"
						id="get"
						value="GET"
						required
						hidden
					/>
					<label htmlFor="get" className="methodLabel">
						Get
					</label>
					<input
						type="radio"
						name="method"
						className="method"
						id="post"
						value="POST"
						required
						hidden
					/>
					<label htmlFor="post" className="methodLabel">
						Post
					</label>
					<input
						type="radio"
						name="method"
						className="method"
						id="put"
						value="PUT"
						required
						hidden
					/>
					<label htmlFor="put" className="methodLabel">
						Put
					</label>
					<input
						type="radio"
						name="method"
						className="method"
						id="delete"
						value="DELETE"
						required
						hidden
					/>
					<label htmlFor="delete" className="methodLabel">
						Delete
					</label>
				</div>
				<input type="submit" value="GO!" className="btn" />
			</form>
		</div>
	);
};

export default Form;
