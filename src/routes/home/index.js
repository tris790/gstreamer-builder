import { h } from 'preact';
import Gstreamer from '../../components/gstreamer';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1 class={style.Header}>Gstreamer Pipeline Builder</h1>
		<Gstreamer />
	</div>
);

export default Home;
