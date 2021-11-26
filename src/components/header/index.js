import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import baseroute from '../../baseroute';

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href={`${baseroute}/`}>Home</Link>
			<a activeClassName={style.active} href="https://gstreamer.freedesktop.org/documentation/plugins_doc.html?gi-language=c">Documentation</a>
		</nav>
	</header>
);

export default Header;
