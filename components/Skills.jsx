import React from "react";
import { SkillsContainer } from "./SkillsContainer";
import { skillsData } from "./skillsData";

export const Skills = () => {
	// const { frontend, backend } = skillsData;

	return (
		<div id="skills" className="w-full">
			<div className="max-h-screen-md mx-auto px-12 py-16 text-center md:text-left md:max-w-6xl">
				<h2 className="text-5xl text-slate-300 md:text-7xl tracking-wider uppercase font-bold mx-10">
					Skills
				</h2>
				<h3 className="text-slate-400 text-xl md:text-xl tracking-wider font-light mx-10">
					Here are a few of the technologies I have been working with recently:
				</h3>
				<div>
					{/* <div className=" grid grid-cols-1 mx-auto md:grid-cols-2"> */}
					{/* <SkillsContainer title="Frontend" skills={frontend} />
					<SkillsContainer title="Backend" skills={backend} /> */}
					<SkillsContainer skills={skillsData} />
				</div>
			</div>
		</div>
	);
};
