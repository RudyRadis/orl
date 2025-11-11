"use client";

import React from 'react'
import { AddIcone } from './AddIcone'
import { MobileCard } from "./MobileCard";
import { useState } from 'react';

type MainCardProps = {
	children?: React.ReactNode;
};

export const MainCard: React.FC<MainCardProps> = ({ children }) => {
	const [mobileCards, setMobileCards] = useState<number[]>([]);
	const [nextId, setNextId] = useState(1); // ← Compteur simple
	const maxCards = 4;

	const addMobileCard = () => {
		if (mobileCards.length < maxCards) {
			setMobileCards([...mobileCards, nextId]); // ← ID court : 1, 2, 3, 4
			setNextId(nextId + 1);
		}
	};

	const removeMobileCard = (id: number) => {
		setMobileCards(mobileCards.filter(cardId => cardId !== id));
	};

	return (
		<div className="w-full bg-[var(--color-foreground)] text-[var(--color-background)] shadow-md p-2 sm:p-8 rounded-2xl flex-1">
			{children}

			{/* Affiche toutes les MobileCards */}
			{mobileCards.map((id) => (

				<div key={id} className={mobileCards.length === 0 ? '' : 'mt-0'}>
					<MobileCard onClose={() => removeMobileCard(id)} placeholderSuffix={String(id)} />
				</div>
			))}

			{/* Affiche l'icône Add seulement si on a moins de 4 cartes */}
			{mobileCards.length < maxCards && (

				<div className={mobileCards.length === 0 ? '' : 'mt-4'}>
					<AddIcone onClick={addMobileCard} />
				</div>

			)}
		</div>
	);
};