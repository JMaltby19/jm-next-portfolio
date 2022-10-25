import React from "react";
import netflixClone from "../public/assets/netflixClone.png";
import weatherApp from "../public/assets/weatherApp.png";
import speedGame from "../public/assets/other/speed-type.png";
import Image from "next/image";
import devLink from "../public/assets/other/dev-link.png";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "Netflix Clone",
			dev: "Full-stack",
			imgSrc: netflixClone,
			url: "https://dev-link-ybel.onrender.com",
			desc: "Dev-Link is a site where developers can create a profile with their specific tech skills and Github Repo's. My first application using TypeScript, there has beena fair amount to learn and I am only scratching the surface. Also uses Redux, MongoDb and TailwindCSS for styling.",
			stack:
				"TypeScript | React | Hooks | Redux | JavaScript | NodeJS | Express | MongoDB | TailwindCSS",
			gitRepo: "https://github.com/JMaltby19/Dev-Link",
		},
		{
			id: 2,
			title: "Netflix Clone",
			dev: "Full-stack",
			imgSrc: netflixClone,
			url: "https://flix-project.co.uk",
			desc: "This is my version of Netflix. Users can sign up and create an account using node and express. These accounts are stored in a SQL database. Once logged in, you can browse movies and series, saving your favourites to your watchlist. You can also modify your user credentials.",
			stack:
				"React | Hooks | JavaScript | NodeJS | Express | MySQL | RESTful | SASS",
			gitRepo: "https://github.com/Jmaltby19/netflix-clone",
		},
		{
			id: 3,
			title: "Weather App",
			dev: "Front-end (React)",
			imgSrc: weatherApp,
			url: "https://react-weather-app-drab-sigma.vercel.app/",
			desc: "This Weather app used the Open Weather API. This was one of my first projects to use React. A simple app which displays the users current weather and the weeks forecast",
			stack: "React | Hooks | JavaScript",
			gitRepo: "https://github.com/JMaltby19/react-weather-app",
		},

		{
			id: 4,
			title: "Speed Typing Game",
			dev: "Front-end (React)",
			imgSrc: speedGame,
			url: "https://speed-typing-game-orpin.vercel.app/",
			desc: "The speed typing game will count the amount of words typed within a set time.",
			stack: "React | Hooks | JavaScript",
			gitRepo: "https://github.com/JMaltby19/speed-typing",
		},
	];

	return (
		<div id="projects" className="w-full">
			<div className=" max-w-screen-xl mx-auto px-12 text-center md:text-left md:max-w-screen-2xl">
				<h2 className="text-5xl text-slate-300 md:text-7xl tracking-wider uppercase font-bold mx-10">
					Projects
				</h2>
				<h3 className="text-slate-400 text-xl md:text-xl tracking-wider font-light mx-10">
					Below are some examples of the projects I&apos;ve enjoyed working on:
				</h3>
				<div className="max-w-8xl flex flex-col md:auto-cols-auto md:mx-8">
					{projects.map(
						({ id, title, dev, imgSrc, url, desc, stack, gitRepo }) => (
							// <Link key={id} href={`/projects/${url}`}>
							<div
								key={id}
								className=" z-0 duration-200  bg-[#233554] group overflow-hidden rounded-md flex flex-col xl:flex-row my-8"
							>
								<a
									href={`${url}`}
									rel="noreferrer"
									target="_blank"
									className=" xl:w-3/5 cursor-pointer flex justify-center items-center rounded-md opacity-40 hover:opacity-100 ease-in duration-500"
								>
									<Image src={imgSrc} alt={title} />
								</a>
								<div className="flex flex-col justify-around items-center mx-4l xl:w-2/5">
									<h2 className=" text-slate-300 text-center text-3xl my-0 font-semibold underline-offset-2">
										{title}
									</h2>
									<h3 className=" text-slate-400 text-center font-medium">
										{dev}
									</h3>
									<p className=" text-teal-400 text-center font-semibold py-6">
										{stack}
									</p>
									<p className="text-slate-400 text-center pb-6">{desc}</p>
									<div className="z-50">
										<a
											href={gitRepo}
											rel="noreferrer"
											target="_blank"
											className="z-50"
										>
											<FaGithub
												size={40}
												className=" text-slate-300 hover:text-teal-300 mb-4"
											/>
										</a>
									</div>
								</div>
							</div>
							// </Link>
						)
					)}
				</div>
			</div>
		</div>
	);
};
