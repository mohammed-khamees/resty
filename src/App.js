import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Count: 0,
			Results: [],
			headers: [
				{
					'Content-type': 'application/json',
				},
			],
		};
	}

	handleForm = (results) => {
		this.setState({ Results: results });
	};

	render() {
		return (
			<>
				<Header />
				<Form handler={this.handleForm} />
				<Results Results={this.state.Results} headers={this.state.headers} />
				<Footer />
			</>
		);
	}
}
