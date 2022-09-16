import { Contact } from "../components/Contact";
import { Homepage } from "../components/Homepage";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { TabHeader } from "../components/TabHeader";

export default function Home() {
	return (
		<div className=" bg-[#0a192f]">
			{/* <TabHeader /> */}
			<Homepage />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}
