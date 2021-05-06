import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Help from './Help';
import HistoryPage from './HistoryPage';

const Main = () => {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/history" component={HistoryPage} />
				<Route exact path="/help" component={Help} />
			</Switch>
		</main>
	);
};

export default Main;
