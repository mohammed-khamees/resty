import React, { Component } from 'react';
import Form from './Form';
import Results from './Results';
import History from './history';

let method, url, data;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			Results: [],
			headers: [
				{
					'Content-type': 'application/json',
				},
			],
			api: JSON.parse(localStorage.getItem('api')) || [],
			urlValue: '',
			methodVal: 'GET',
			locationData: this.props.location.body?.data,
			locationMethod: this.props.location.body?.method,
			locationUrl: this.props.location.body?.url,
			validApi: '',
		};
	}

	toggleLoading = (type) => {
		if (type === 'basic') {
			this.setState({ validApi: type });
		} else {
			this.setState({ loading: !this.state.loading, validApi: '' });
		}
	};

	handleForm = (results, data) => {
		try {
			this.setState({ Results: results });
			this.setState({ locationData: data });
		} catch (error) {
			console.error(error);
		}
	};

	apiStorage = (method, url, data) => {
		let filteredArr = this.state.api.filter(
			(data) => data.method === method && data.url === url,
		);
		if (!filteredArr.length) {
			this.setState({ api: [...this.state.api, { method, url, data }] });
			localStorage.setItem('api', JSON.stringify(this.state.api));
		}
	};

	urlHandling = (url, method) => {
		this.setState({ urlValue: url, methodVal: method });
		this.setState({ locationMethod: 0 });
		this.setState({ locationUrl: 0 });
	};

	render() {
		if (this.props.location.body && this.props.location.body.data) {
			method = this.props.location.body.method;
			url = this.props.location.body.url;
			data = this.props.location.body.data;
		}

		if (!this.state.locationData) data = this.state.locationData;
		if (!this.state.locationMethod) method = this.state.methodVal;
		if (!this.state.locationUrl) url = this.state.urlValue;

		return (
			<>
				<Form
					handler={this.handleForm}
					loading={this.toggleLoading}
					apiStorage={this.apiStorage}
					urlValue={this.state.urlValue}
					methodVal={this.state.methodVal}
					locationUrl={url}
					locationMethod={method}
					locationData={data}
				/>
				<div className="container">
					<History api={this.state.api} urlHandling={this.urlHandling} />
					<Results
						Results={this.state.Results}
						headers={this.state.headers}
						loading={this.state.loading}
						validApi={this.state.validApi}
						locationData={data}
					/>
				</div>
			</>
		);
	}
}

export default Home;
