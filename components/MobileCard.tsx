"use client";

import React from "react";
import { GarbageIcone } from "./GarbageIcone";
import { useState } from 'react';
import { BaseOfferCard } from "./BaseOfferCard";
import { OfferCard } from "./OfferCard";
import { AddIcone } from "./AddIcone";


type MobileCardProps = {
	onClose?: () => void;
	placeholderSuffix?: string;
};

export const MobileCard: React.FC<MobileCardProps> = ({ onClose, placeholderSuffix }) => {
	const [value, setValue] = useState("");
	const [nextId, setNextId] = useState(1); // ← Compteur simple
	const [offerCard, setOfferCard] = useState<number[]>([]);
	const [baseTotal, setBaseTotal] = useState(0);
	const maxOfferCards = 3;

	const addOfferCard = () => {
		if (offerCard.length < maxOfferCards) {
			setOfferCard([...offerCard, nextId]); // Utilise timestamp comme ID unique
			setNextId(nextId + 1);
		}
	};

	const removeOfferCard = (id: number) => {
		setOfferCard(offerCard.filter(cardId => cardId !== id));
	};


	return (
		<div className="rounded-xl bg-[#d3bd92] text-[100903] p-2 sm:p-4 shadow ">
			<div className="flex items-center justify-between">
				<div className="flex flex-col md:flex-row md:items-center">
					<span className="font-semibold">Mobile {placeholderSuffix ?? ""} :</span>
					{/* Optionnel: un bouton pour revenir à l’icône */}

					<input
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder={`Nom du mobile ${placeholderSuffix ?? ""}`}
						className=" md:ml-2
								w-64 lg:w-128
								px-4 py-2
								shadow
								rounded-xl
								focus:outline-none
								focus:ring-2
								focus:ring-[#FF7900]
								focus:border-transparent
								text-[#100903]
								bg-[#f5f0e6]"
					/>

					<div className="md:ml-2 mt-2 md:mt-0">
						{onClose && (
							<GarbageIcone onClick={onClose} />
						)}

					</div>
				</div>

			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<BaseOfferCard onTotalChange={setBaseTotal} />

				{offerCard.map((id) => (
					<OfferCard
						key={id}
						onClose={() => removeOfferCard(id)}
						baseTotal={baseTotal}
					/>
				))}

				{offerCard.length < maxOfferCards && (
					<div className="mt-2">
						<AddIcone onClick={addOfferCard} />
					</div>
				)}
			</div>
		</div>
	);
};