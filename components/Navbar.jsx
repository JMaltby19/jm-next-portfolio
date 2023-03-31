import React, { useState } from "react";
import Link from "next/link";
import {
	FaBars,
	FaTimes,
	FaInstagram,
	FaTwitterSquare,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import logo from "../public/assets/other/jm_logo-removebg-preview.png";
import Image from "next/image";

export const Navbar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		// { id: 1, link: "home" },
		{ id: 2, link: "about" },
		{ id: 3, link: "projects" },
		{ id: 4, link: "skills" },
		{ id: 5, link: "contact" },
	];

	return (
		<div className="w-full h20 z-10 fixed bg-[#0a192f] text-black duration-300 ease-in">
			<div className="flex justify-between items-center w-full max-w-screen-xl mx-auto p-4">
				<Link href="/#about">
					<Image src={logo} alt="logo" height="50px" width="50px" />
				</Link>
				<div>
					<ul className="hidden  md:flex justify-items-end ">
						{links.map(({ id, link }) => (
							<Link key={id} href={`/#${link}`}>
								<li className="text-teal-300 ml-10 mt-1 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-125  tracking-wider ">
									{link}
								</li>
							</Link>
						))}
						<div>
							<a
								href="/John_Maltby_Resume_31-03-2023-21-34-01.pdf"
								target="_blank"
							>
								<button className="hidden group md:flex items-center justify-center text-center ml-10 rounded-md text-teal-300 border-2 border-teal-300  w-14 duration-200 ease-out hover:scale-125">
									CV
								</button>
							</a>
						</div>
					</ul>

					{!nav && (
						<div
							className="md:hidden cursor-pointer text-slate-300"
							onClick={() => setNav(true)}
						>
							<FaBars size={20} />
						</div>
					)}
				</div>
			</div>

			<div
				className={
					nav
						? "md:hidden fixed left-0 top-0 w-full h-full bg-black/20 backdrop-blur duration-200"
						: ""
				}
			>
				<div
					className={
						nav
							? "fixed right-0 top-0 w-4/5 h-full bg-slate-300 text-[#0a192f] p-10 ease-in duration-500"
							: "fixed top-0 right-[-100%] p-10 h-full ease-in duration-500"
					}
				>
					<div>
						<div className=" flex w-full justify-end">
							{/* <Link href="/#home">
								<h2 className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
									Hello
								</h2>
							</Link> */}
							<div
								className="p-auto cursor-pointer"
								onClick={() => setNav(false)}
							>
								<FaTimes size={20} />
							</div>
						</div>
					</div>
					<div className="mt-24 flex flex-col h-fit gap-20">
						<ul className="uppercase">
							{links.map(({ id, link }) => (
								<Link key={id} href={`/#${link}`}>
									<li
										onClick={() => {
											setNav(false);
										}}
										className="text-[#0a192f] py-4 text-2xl tracking-wider duration-200 ease-out hover:scale-105 cursor-pointer"
									>
										{link}
									</li>
								</Link>
							))}
							<div>
								<a href="/John_Maltby_CV.pdf" target="_blank">
									<button className="flex items-center justify-center text-center ml-6 rounded-md text-[#0a192f] border-2 border-[#0a192f]  w-14 duration-200 ease-out hover:scale-125">
										CV
									</button>
								</a>
							</div>
						</ul>
						<div>
							<div className="grid grid-cols-4 mx-auto ">
								<a
									href="https://github.com/JMaltby19?tab=repositories"
									rel="noreferrer"
									target="_blank"
									className="flex items-center justify-center p-3 duration-200 ease-out hover:scale-105 cursor-pointer"
								>
									<FaGithub size={50} />
								</a>
								<a
									href="https://www.linkedin.com/in/john-maltby-4a822344?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMys6VS3pRTGDX7K9XEWnXg%3D%3D"
									rel="noreferrer"
									target="_blank"
									className="flex items-center justify-center p-3 duration-200 ease-out hover:scale-105 cursor-pointer"
								>
									<FaLinkedin size={50} />
								</a>
								<a
									href="https://www.instagram.com/maltby19/"
									rel="noreferrer"
									target="_blank"
									className="flex items-center justify-center p-3 duration-200 ease-out hover:scale-105 cursor-pointer"
								>
									<FaInstagram size={50} />
								</a>
								<a
									href="https://twitter.com/JMaltby19"
									rel="noreferrer"
									target="_blank"
									className="flex items-center justify-center p-3 duration-200 ease-out hover:scale-105 cursor-pointer"
								>
									<FaTwitterSquare size={50} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
