import { useEffect } from 'react';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
	});

	return <Component {...pageProps} />;
}

export default MyApp;
