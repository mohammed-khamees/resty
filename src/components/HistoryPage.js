import React, { Component } from 'react';
import { If, Then, Else } from './if';
import { NavLink } from 'react-router-dom';
import JSONPretty from 'react-json-pretty';

class HistoryPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			api: JSON.parse(localStorage.getItem('api')) || [],
			body: [],
		};
	}

	dataHandling = (data) => {
		this.setState({ body: data });
	};

	render() {
		return (
			<>
				<aside>
					<NavLink
						to={{
							pathname: '/',
							body: {
								method: this.state.body.method,
								url: this.state.body.url,
								data: this.state.body.data,
							},
						}}
					>
						Re-Run
					</NavLink>
					<If condition={this.state.api.length}>
						<Then>
							{this.state.api.map((data, index) => (
								<div
									className="routes"
									key={index}
									onClick={() => {
										this.dataHandling(data);
									}}
								>
									<span className="routeMethod">{data.method}</span>
									&#160;&#160;
									<span className="routeUrl">{data.url}</span>
								</div>
							))}
						</Then>
					</If>

					<div className="result" title="paragraph">
						<If condition={!this.state.body || this.state.body.length === 0}>
							<Then>
								<div>No data shown</div>
							</Then>
							<Else>
								<JSONPretty
									id="json-pretty"
									data={this.state.body}
								></JSONPretty>
							</Else>
						</If>
					</div>
				</aside>
			</>
		);
	}
}

export default HistoryPage;
