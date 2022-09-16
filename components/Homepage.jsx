import React from "react";
import { MdExpandMore } from "react-icons/md";
import { SocialBar } from "./SocialBar";

export const Homepage = () => {
	return (
		<div id="about" className="w-full h-full text-center">
			<div className="max-w-screen-xl mx-auto w-full h-full p-20 flex flex-col justify-evenly items-center">
				<div className="font-bold text-slate-300 text-4xl h-72">
					<h1>
						Hi, I&apos;m <span className=" text-teal-400">John</span>
					</h1>
					<h1>Welcome to my page</h1>
				</div>
				<div className="text-slate-400 text-xl max-w-xl mx-auto h-96 mb-20 md:mb-0">
					I am a junior developer with experience in React, JavaScript, NodeJS,
					CSS & HTML. Over the past year I have been creating projects which
					showcase my abilities and knowledge. I am looking forward to start my
					career in web development and cannot wait to being involved in bigger
					and better things!
				</div>
			</div>
		</div>
	);
};
