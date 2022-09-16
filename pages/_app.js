import { Navbar } from "../components/Navbar";
import { SocialBar } from "../components/SocialBar";
import { TabHeader } from "../components/TabHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<TabHeader />
			<Navbar />
			<SocialBar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
