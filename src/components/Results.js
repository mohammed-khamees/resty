import React from 'react';
import JSONPretty from 'react-json-pretty';
import { If, Then, Else } from './if';

const Results = ({ Results, headers, loading, locationData, validApi }) => {
	return (
		<div className="result" title="paragraph">
			<If condition={locationData}>
				<Then>
					<JSONPretty id="json-pretty" data={headers[0]}></JSONPretty>
					<JSONPretty id="json-pretty" data={locationData}></JSONPretty>
				</Then>
				<Else>
					<If condition={validApi}>
						<Then>
							<div>Invalid Api...</div>
						</Then>
						<Else>
							<If condition={loading}>
								<Then>
									<div>Loading...</div>
								</Then>
								<Else>
									<JSONPretty id="json-pretty" data={headers[0]}></JSONPretty>
									<JSONPretty id="json-pretty" data={Results}></JSONPretty>
								</Else>
							</If>
						</Else>
					</If>
				</Else>
			</If>
		</div>
	);
};

export default Results;
