import React from 'react';
import JSONPretty from 'react-json-pretty';
import { If, Then, Else } from './if';

const Results = ({ Results, headers, loading }) => {
	return (
		<div className="result" title="paragraph">
			<If condition={loading}>
				<Then>
					<div>Loading...</div>
				</Then>
				<Else>
					<JSONPretty id="json-pretty" data={headers[0]}></JSONPretty>
					<JSONPretty id="json-pretty" data={Results}></JSONPretty>
				</Else>
			</If>
		</div>
	);
};

export default Results;
