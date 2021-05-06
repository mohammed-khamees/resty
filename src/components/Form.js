import React from 'react';
import './../style/Form.scss';

const Form = ({
	handler,
	loading,
	apiStorage,
	urlValue,
	methodVal,
	locationUrl,
	locationMethod,
}) => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let method = e.target.method.value;
			let data;
			let body = e.target.body.value;

			if (method === 'GET') {
				const raw = await fetch(e.target.url.value, {
					method: method,
					headers: {
						'Content-type': 'application/json',
					},
				});

				if (raw.type === 'basic') return loading(raw.type);

				data = await raw.json();

				loading(raw.type);
				apiStorage(method, e.target.url.value, data);
			} else if (method === 'POST' || method === 'PUT') {
				const raw = await fetch(e.target.url.value, {
					method: method,
					headers: {
						'Content-type': 'application/json',
					},
					body: body,
				});
				if (raw.type === 'basic') return loading(raw.type);

				data = await raw.json();

				loading(raw.type);
				apiStorage(method, e.target.url.value, data);
			} else if (method === 'DELETE') {
				const raw = await fetch(e.target.url.value, {
					method: method,
					headers: {
						'Content-type': 'application/json',
					},
				});
				if (raw.type === 'basic') return loading(raw.type);

				data = await raw.json();

				loading(raw.type);
				apiStorage(method, e.target.url.value, data);
			}

			loading();
			handler(data, 0);
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
					required={urlValue ? false : true}
					defaultValue={(urlValue && urlValue) || (locationUrl && locationUrl)}
				/>
				<div className="btns">
					{methodVal === 'GET' || locationMethod === 'GET' ? (
						<input
							type="radio"
							name="method"
							className="method"
							id="get"
							value="GET"
							required
							hidden
							checked
						/>
					) : (
						<input
							type="radio"
							name="method"
							className="method"
							id="get"
							value="GET"
							required
							hidden
						/>
					)}

					<label htmlFor="get" className="methodLabel">
						Get
					</label>
					{methodVal === 'POST' || locationMethod === 'POST' ? (
						<input
							type="radio"
							name="method"
							className="method"
							id="post"
							value="POST"
							required
							hidden
							checked
						/>
					) : (
						<input
							type="radio"
							name="method"
							className="method"
							id="post"
							value="POST"
							required
							hidden
						/>
					)}

					<label htmlFor="post" className="methodLabel">
						Post
					</label>
					{methodVal === 'PUT' || locationMethod === 'PUT' ? (
						<input
							type="radio"
							name="method"
							className="method"
							id="put"
							value="PUT"
							required
							hidden
							checked
						/>
					) : (
						<input
							type="radio"
							name="method"
							className="method"
							id="put"
							value="PUT"
							required
							hidden
						/>
					)}

					<label htmlFor="put" className="methodLabel">
						Put
					</label>
					{methodVal === 'DELETE' || locationMethod === 'DELETE' ? (
						<input
							type="radio"
							name="method"
							className="method"
							id="delete"
							value="DELETE"
							required
							hidden
							checked
						/>
					) : (
						<input
							type="radio"
							name="method"
							className="method"
							id="delete"
							value="DELETE"
							required
							hidden
						/>
					)}

					<label htmlFor="delete" className="methodLabel">
						Delete
					</label>
				</div>
				<textarea
					name="body"
					id="body"
					placeholder="right your json object here"
				></textarea>
				<input type="submit" value="GO!" className="btn" />
			</form>
		</div>
	);
};

export default Form;
