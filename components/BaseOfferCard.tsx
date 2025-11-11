import React from 'react'
import { useState, useEffect } from 'react';
import { FaSimCard, FaMobileAlt } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { MdEuro } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";

type BaseOfferCardProps = {
  onTotalChange?: (total: number) => void;
};

export const BaseOfferCard: React.FC<BaseOfferCardProps> = ({ onTotalChange }) => {
  const [mobilePrice, setMobilePrice] = useState('');
  const [subPrice, setSubPrice] = useState('');
  const [discountMobile, setDiscountMobile] = useState('');

  const total = Number(mobilePrice) - Number(discountMobile) + 18 * Number(subPrice);

  useEffect(() => {
    onTotalChange?.(total);
  }, [total, onTotalChange]); // ✔ plus de warning ESLint

	return (
		<div className="rounded-xl bg-[#f5f0e6] text-[100903] p-4 shadow mt-2">
			<h1 className='text-lg mb-2 text-[#100903]'>
				Mobile non remisé
			</h1>
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
						<span>Forfait de base :</span>
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
					value={total}
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
		opacity-75
		text-2xl font-bold"
				/>
			</div>



		</div>
	)
}
