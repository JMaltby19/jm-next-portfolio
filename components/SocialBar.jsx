import Image from "next/image";
import React from "react";
import { socialImgs } from "./skillsData";
import {
	FaInstagram,
	FaTwitterSquare,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";

export const SocialBar = () => {
	// const socials = () => {
	// 	return socialImgs.map((item) => {
	// 		return (
	// 			<ul key={item} className="">
	// 				<li className="pb-2">
	// 					<div className="">
	// 						<Image url={item} alt="icon" width="40px" height="40px" />
	// 					</div>
	// 				</li>
	// 			</ul>
	// 		);
	// 	});
	// };

	return (
		<div className=" hidden md:flex flex-col fixed items-center mx-0 px-0 left-6 top-80">
			{/* {socials()} */}
			<ul>
				<li>
					<a
						href="https://github.com/JMaltby19?tab=repositories"
						rel="noreferrer"
						target="_blank"
					>
						<FaGithub
							size={40}
							className=" text-slate-300 hover:text-teal-300 mb-4"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/john-maltby-4a822344?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMys6VS3pRTGDX7K9XEWnXg%3D%3D"
						rel="noreferrer"
						target="_blank"
					>
						<FaLinkedin
							size={40}
							className=" text-slate-300 hover:text-teal-300 mb-4"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/maltby19/"
						rel="noreferrer"
						target="_blank"
					>
						<FaInstagram
							size={40}
							className=" text-slate-300 hover:text-teal-300 mb-4"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/JMaltby19"
						rel="noreferrer"
						target="_blank"
					>
						<FaTwitterSquare
							size={40}
							className=" text-slate-300 hover:text-teal-300 mb-4"
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};
