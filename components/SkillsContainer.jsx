import React from "react";
import { SkillItem } from "./SkillItem";

export const SkillsContainer = ({ title, skills }) => {
	const skillsMap = () => {
		return skills.map(({ name, img, index }) => {
			return <SkillItem key={index} name={name} img={img} />;
		});
	};

	// const skillsMap = () => {
	// 	return skills.map((item) => {
	// 		return <SkillItem key={item} img={item} />;
	// 	});
	// };

	return (
		<div
			className="flex flex-col justify-between md:mx-6 my-6 bg-[#233554]
     rounded-md py-2 px-4 overflow-hidden"
		>
			{/* <h1 className="text-center text-3xl mb-6">{title}</h1> */}
			<div className=" mx-4 grid grid-cols-2 justify-items-center md:grid-cols-4 lg:grid-cols-6  gap-16  ">
				{skillsMap()}
			</div>
		</div>
	);
};
