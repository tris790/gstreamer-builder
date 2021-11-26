import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import baseroute from '../baseroute';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path={`${baseroute}/`} />
		</Router>
	</div>
)

export default App;
