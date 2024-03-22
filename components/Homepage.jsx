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
					As a passionate Junior Developer, I bring hands-on experience in web
					technologies, including React, JavaScript, NodeJS, CSS, HTML as well
					as databases such as MySQL. My journey so far has been marked by
					dedicated project work that not only showcases my technical abilities
					but also my commitment to growing within this dynamic field.
				</div>
			</div>
		</div>
	);
};
