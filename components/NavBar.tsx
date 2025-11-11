"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FaBook } from 'react-icons/fa';

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="px-4 py-4 md:px-8 md:py-4 border-b border-[#EAE0CC]">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="inline-block text-2xl font-bold transition-transform duration-300 hover:scale-110 group [font-family:var(--font-anton)]"
				>
					<div className="px-6 py-4 bg-[#EAE0CC] rounded-3xl group-hover:bg-[#FF7900] transition-colors duration-300 flex items-center gap-2">
							<FaBook size={22}  className="text-[#100903] group-hover:text-[#EAE0CC] transition-colors duration-300" />
						<span className="text-[#100903] group-hover:text-[#EAE0CC] transition-colors duration-300">
							ORL
						</span>
					</div>
				</Link>

				{/* Bouton hamburger (mobile) */}
				<button
					className="md:hidden inline-flex flex-col justify-center items-center gap-[4px] p-2 rounded-lg border border-[#EAE0CC]"
					onClick={() => setIsOpen((prev) => !prev)}
					aria-label="Ouvrir le menu"
				>
					<span
						className={`h-[2px] w-6 bg-[#EAE0CC] transition-transform duration-200 ${isOpen ? "translate-y-[6px] rotate-45" : ""
							}`}
					/>
					<span
						className={`h-[2px] w-6 bg-[#EAE0CC] transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"
							}`}
					/>
					<span
						className={`h-[2px] w-6 bg-[#EAE0CC] transition-transform duration-200 ${isOpen ? "-translate-y-[6px] -rotate-45" : ""
							}`}
					/>
				</button>

				{/* Liens desktop */}
				<ul className="hidden md:flex gap-8">
					<li>
						<Link
							href="/comparator"
							className="inline-block text-2xl font-bold transition-transform duration-300 hover:scale-110 group [font-family:var(--font-anton)]"
						>
							<div className="px-6 py-4 bg-[#EAE0CC] rounded-3xl group-hover:bg-[#FF7900] transition-colors duration-300">
								<span className="text-[#100903] group-hover:text-[#EAE0CC] transition-colors duration-300">
									Comparateur
								</span>
							</div>
						</Link>
					</li>
					<li>
						<Link
							href="/settings"
							className="inline-block text-2xl font-bold transition-transform duration-300 hover:scale-110 group [font-family:var(--font-anton)]"
						>
							<div className="px-6 py-4 bg-[#EAE0CC] rounded-3xl group-hover:bg-[#FF7900] transition-colors duration-300">
								<span className="text-[#100903] group-hover:text-[#EAE0CC] transition-colors duration-300">
									Paramètres
								</span>
							</div>
						</Link>
					</li>
				</ul>
			</div>

			{/* Menu mobile déroulant */}
			{isOpen && (
				<ul className="mt-4 flex flex-col gap-2 md:hidden">
					<li>
						<Link
							href="/comparator"
							onClick={() => setIsOpen(false)}
							className="block text-lg font-bold [font-family:var(--font-anton)]"
						>
							<div className="px-4 py-3 bg-[#EAE0CC] rounded-2xl hover:bg-[#FF7900] transition-colors duration-300">
								<span className="text-[#100903] hover:text-[#EAE0CC] transition-colors duration-300">
									Comparateur
								</span>
							</div>
						</Link>
					</li>
					<li>
						<Link
							href="/settings"
							onClick={() => setIsOpen(false)}
							className="block text-lg font-bold [font-family:var(--font-anton)]"
						>
							<div className="px-4 py-3 bg-[#EAE0CC] rounded-2xl hover:bg-[#FF7900] transition-colors duration-300">
								<span className="text-[#100903] hover:text-[#EAE0CC] transition-colors duration-300">
									Paramètres
								</span>
							</div>
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};