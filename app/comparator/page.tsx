import React from 'react'
import { MainCard } from '@/components/MainCard'

export default function Comparator() {
	return (
		<div className="flex-1 h-full flex flex-col">
			<div className="px-8 py-4">
				<h1 className="text-4xl sm:text-6xl tracking-wider font-bold text-center">
					Comparateur
				</h1>
			</div>

			<MainCard />
		</div>
	);
}

