import './../style/Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<h1>RESTy</h1>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/history">History</NavLink>
				</li>
				<li>
					<NavLink to="/help">Help</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
