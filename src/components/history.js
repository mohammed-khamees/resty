import React from 'react';
import { If, Then } from './if';
import './../style/history.scss';

const History = ({ api, urlHandling }) => {
	return (
		<aside>
			<If condition={api.length}>
				<Then>
					{api.map((data, index) => (
						<div
							className="routes"
							key={index}
							onClick={() => {
								urlHandling(data.url, data.method);
							}}
						>
							<span className="routeMethod">{data.method}</span> &#160;&#160;
							<span className="routeUrl">{data.url}</span>
						</div>
					))}
				</Then>
			</If>
		</aside>
	);
};

export default History;
