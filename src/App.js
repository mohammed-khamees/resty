import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';
import History from './components/history';
import './style/App.scss';

export default class App extends Component {
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
		};
	}

	toggleLoading = () => {
		this.setState({ loading: !this.state.loading });
	};

	handleForm = (results) => {
		this.setState({ Results: results });
	};

	apiStorage = (method, url, data) => {
		this.setState({ api: [...this.state.api, { method, url, data }] });
		localStorage.setItem('api', JSON.stringify(this.state.api));
	};

	urlHandling = (url, method) => {
		this.setState({ urlValue: url, methodVal: method });
	};

	render() {
		return (
			<>
				<Header />
				<Form
					handler={this.handleForm}
					loading={this.toggleLoading}
					apiStorage={this.apiStorage}
					urlValue={this.state.urlValue}
					methodVal={this.state.methodVal}
				/>
				<div className="container">
					<History api={this.state.api} urlHandling={this.urlHandling} />
					<Results
						Results={this.state.Results}
						headers={this.state.headers}
						loading={this.state.loading}
					/>
				</div>
				<Footer />
			</>
		);
	}
}
