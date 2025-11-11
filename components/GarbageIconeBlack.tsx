"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";

type GarbageIconeBlack = {
  onClick?: () => void;
  label?: string; // texte facultatif à côté de l’icône
};

export const GarbageIconeBlack: React.FC<GarbageIconeBlack> = ({ onClick, label }) => {
  return (
    <button
	onClick={onClick}
	aria-label={label || "Supprimer"}
	className="
	  flex items-center gap-2 
	  bg-[#100903] hover:bg-[#442A0D]
	  text-white font-medium 
	  py-2 px-4 
	  rounded-lg 
	  shadow-md 
	  transition-transform 
	  active:scale-95
	  cursor-pointer
	"
    >
	<FaTrash size={18} color={"#FF7900"} />
	{label && <span>{label}</span>}
    </button>
  );
};