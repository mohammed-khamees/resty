import React from 'react';

const Results = ({ Results, headers }) => {
	return (
		<pre className="result" title="paragraph">
			"Header": {JSON.stringify(headers[0], null, 2)}
			<br />
			<br />
			"Response": {JSON.stringify(Results, null, 2)}
		</pre>
	);
};

export default Results;
