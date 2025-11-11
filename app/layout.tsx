import type { Metadata } from "next";
import { Anton, Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const anton = Anton({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-anton",
});

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-fraunces",
});

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
	title: "ORL",
	description: "Orange Rudy's Labrairy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={`${anton.variable} ${fraunces.variable} ${nunitoSans.variable} antialiased min-h-screen flex flex-col`}
			>
				<NavBar />
				<main className="flex-1 w-full flex flex-col p-5">
					
						{children}
					
				</main>

			</body>
		</html>
	);
}