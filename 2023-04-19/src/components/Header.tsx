import {Link, NavLink} from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						{/* <Link to='/'>Home</Link> */}
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						{/* <Link to='/about'>About</Link> */}
						<NavLink to='/about'>About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
