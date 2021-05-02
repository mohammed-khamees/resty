import React from 'react';
import './../style/Form.scss';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url: '',
			method: '',
			flag: false,
		};
	}

	handleWrite = (e) => {
		e.preventDefault();
		e.target.style.backgoundColor = 'white';
		const url =
			e.target.parentElement.parentElement.firstChild.nextSibling.value;

		const method = e.target.previousSibling.value;
		this.setState({ url, method });
	};

	handleMethod = (e) => {
		e.preventDefault();
		const url = e.target.parentElement.firstChild.nextSibling.value;
		if (url && !this.state.flag) {
			this.setState({ ...this.state, flag: true });
		} else {
			this.setState({ ...this.state, flag: false });
		}
	};

	render() {
		return (
			<div className="request">
				<form>
					<label htmlFor="url">URL:</label>
					<input
						type="url"
						name="url"
						id="url"
						placeholder="Enter request URL"
						required
					/>
					<input
						type="submit"
						value="GO!"
						onClick={this.handleMethod}
						className="btn"
					/>
					{this.state.flag && (
						<div className="btns">
							<input
								type="radio"
								name="method"
								className="method"
								id="get"
								value="get"
								hidden
							/>
							<label
								htmlFor="get"
								onClick={this.handleWrite}
								className="methodLabel"
							>
								Get
							</label>
							<input
								type="radio"
								name="method"
								className="method"
								id="post"
								value="post"
								hidden
							/>
							<label
								htmlFor="post"
								className="methodLabel"
								onClick={this.handleWrite}
							>
								Post
							</label>
							<input
								type="radio"
								name="method"
								className="method"
								id="put"
								value="put"
								hidden
							/>
							<label
								htmlFor="put"
								className="methodLabel"
								onClick={this.handleWrite}
							>
								Put
							</label>
							<input
								type="radio"
								name="method"
								className="method"
								id="delete"
								value="delete"
								hidden
							/>
							<label
								htmlFor="delete"
								className="methodLabel"
								onClick={this.handleWrite}
							>
								Delete
							</label>
						</div>
					)}
				</form>
				<div className="result">
					{this.state.method} &nbsp;&nbsp;&nbsp;{this.state.url}
				</div>
			</div>
		);
	}
}

export default Form;
