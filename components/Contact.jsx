import React from "react";
import { FaMailBulk } from "react-icons/fa";

export const Contact = () => {
	return (
		<div id="contact" className="h-screen w-full text-center">
			<div className="max-w-screen-xl mx-auto w-full h-full p-20 flex flex-col justify-evenly items-center">
				<h1 className="text-5xl text-slate-300 md:text-7xl tracking-wider uppercase font-bold mx-10">
					Contact me
				</h1>

				<div className="text-slate-400 text-xl max-w-xl mx-auto">
					Please feel free to reach out if you have any questions.
				</div>
				<div>
					<a
						href="mailto:john_maltby9@hotmail.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						<button className="flex items-center justify-center text-center rounded-md text-2xl py-2 text-teal-300 border-2 border-teal-300 w-48 duration-200 ease-out hover:scale-125">
							<FaMailBulk size={30} /> <p className="ml-4"> Say Hello </p>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
