import React from 'react';
import JSONPretty from 'react-json-pretty';

const Results = ({ Results, headers }) => {
	return (
		<div className="result" title="paragraph">
			<JSONPretty id="json-pretty" data={headers[0]}></JSONPretty>
			<JSONPretty id="json-pretty" data={Results}></JSONPretty>
		</div>
	);
};

export default Results;
