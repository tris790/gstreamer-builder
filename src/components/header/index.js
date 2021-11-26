import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<a activeClassName={style.active} href="https://gstreamer.freedesktop.org/documentation/plugins_doc.html?gi-language=c">Documentation</a>
		</nav>
	</header>
);

export default Header;
