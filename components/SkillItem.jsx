import React from "react";
import Image from "next/image";

export const SkillItem = ({ name, img }) => {
	return (
		<div className="flex flex-row justify-between w-28 p-2 hover:scale-125">
			<div
				className="flex flex-col justify-between items-center group bg-slate-300
      rounded-md p-2 "
			>
				{/* <p className=" font-semibold mb-1 text-center">{name}</p> */}
				<Image src={img} alt={name} />
			</div>
		</div>
	);
};
