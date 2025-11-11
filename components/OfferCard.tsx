import React from 'react'
import { useState } from 'react';
import { FaSimCard, FaMobileAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { MdEuro } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { GarbageIconeBlack } from './GarbageIconeBlack';

type OfferCardProps = {
	onClose?: () => void;
	baseTotal?: number;
};

export const OfferCard: React.FC<OfferCardProps> = ({ onClose, baseTotal = 0 }) => {
	const [mobilePrice, setMobilePrice] = useState('');
	const [subPrice, setSubPrice] = useState('');
	const [discountMobile, setDiscountMobile] = useState('');

	const totalRemise = Number(mobilePrice) - Number(discountMobile) + 18 * Number(subPrice);
	
	const economyNumb = totalRemise === 0 ? 0 : baseTotal - totalRemise;
	const textColor = economyNumb >= 0 ? "#119749" : "#cf2917"; 
	const economyStr =
		economyNumb > 0 ? `+${economyNumb}` : economyNumb.toString();

	return (
		<div className="rounded-xl bg-[#f5f0e6] text-[100903] p-4 shadow w-full mt-2">
			<div className='flex justify-between items-center mb-2'>
				<h1 className='text-lg mb-2 text-[#100903]'>
					Mobile remisé
				</h1>
				{onClose && (
					<GarbageIconeBlack onClick={onClose} />
				)}
			</div>
			<div className='flex gap-2 mb-2 justify-between'>
				<div className='flex-1'>
					<div className="flex items-center gap-2 mb-2">
						<FaMobileAlt size={20} />
						<span>Prix Mobile :</span>
					</div>
					<input
						type="number"
						value={mobilePrice}
						onChange={(e) => setMobilePrice(e.target.value)}
						placeholder="0"
						className=" w-full
								px-4 py-2
								shadow
								rounded-xl
								focus:outline-none
								focus:ring-2
								focus:ring-[#FF7900]
								focus:border-transparent
								text-[#100903]
								bg-[#f5f0e6]
								border-[#100903] border"
					/>
				</div>
				<div className='flex-1'>
					<div className="flex items-center gap-2 mb-2">
						<FaSimCard size={20} />
						<span>Forfait remisé :</span>
					</div>
					<input
						type="number"
						value={subPrice}
						onChange={(e) => setSubPrice(e.target.value)}
						placeholder="0"
						className=" w-full
								px-4 py-2
								shadow
								rounded-xl
								focus:outline-none
								focus:ring-2
								focus:ring-[#FF7900]
								focus:border-transparent
								text-[#100903]
								bg-[#f5f0e6]
								border-[#100903] border"
					/>
				</div>


			</div>


			<div className='flex gap-2 mb-2 justify-between'>
				<div className='flex-1'>
					<div className="flex items-center gap-2 mb-2">
						<CgDetailsMore size={20} />
						<span>Détail :</span>
					</div>
					<input
						type="text"
						value={`${Number(mobilePrice) - Number(discountMobile)} (${Number(mobilePrice)} - ${Number(discountMobile)}) + ${18 * Number(subPrice)} (18 mois)`}
						readOnly
						placeholder="0"
						className="w-full
					px-4 py-2
					shadow
					rounded-xl
					focus:outline-none
					text-[#100903]
					bg-[#f5f0e6]
					border-[#100903] border
					cursor-not-allowed
					opacity-75"
					/>
				</div>
				<div className='flex-1'>
					<div className="flex items-center gap-2 mb-2">
						<MdOutlineDiscount size={20} />
						<span>Autre remise :</span>
					</div>
					<input
						type="number"
						value={discountMobile}
						onChange={(e) => setDiscountMobile(e.target.value)}
						placeholder="0"
						className=" w-full
								px-4 py-2
								shadow
								rounded-xl
								focus:outline-none
								focus:ring-2
								focus:ring-[#FF7900]
								focus:border-transparent
								text-[#100903]
								bg-[#f5f0e6]
								border-[#100903] border"
					/>
				</div>


			</div>

			<div className='mb-2'>
				<div className="flex items-center gap-2 mb-2">
					<MdEuro size={26} />
					<h1 className='text-[#100903] text-2xl'>Total :</h1>
				</div>
				<input
					type="text"
					value={Number(mobilePrice) - Number(discountMobile) + 18 * Number(subPrice)}
					readOnly
					placeholder="0"
					className=" w-full
							px-4 py-2
							shadow
							rounded-xl
							focus:outline-none
							text-[#100903]
							bg-[#f5f0e6]
							border-[#100903] border
							cursor-not-allowed
							opacity-75
							text-2xl font-bold"
				/>
			</div>


			<div className='mb-2'>
				<div className="flex items-center gap-2 mb-2">
					<FaCartPlus size={26} />
					<h1 className='text-[#100903] text-2xl'>Économies :</h1>
				</div>
				<input
					type="text"
					value={economyStr}
					readOnly
					placeholder="0"
					style={{ color: textColor }}
					className=" w-full
							px-4 py-2
							shadow
							rounded-xl
							focus:outline-none
							bg-[#f5f0e6]
							border-[#100903] border
							cursor-not-allowed
							opacity-75
							text-2xl font-bold"
				/>
			</div>
		</div>
	)
}