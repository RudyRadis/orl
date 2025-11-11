"use client";

import React from "react";
import { FaTrash } from "react-icons/fa";

type GarbageIcone = {
  onClick?: () => void;
  label?: string; // texte facultatif à côté de l’icône
};

export const GarbageIcone: React.FC<GarbageIcone> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      aria-label={label || "Supprimer"}
      className="
        flex items-center gap-2 
        bg-[#FF7900] hover:bg-[#ff851a]
        text-white font-medium 
        py-2 px-4 
        rounded-lg 
        shadow-md 
        transition-transform 
        active:scale-95
	  cursor-pointer
      "
    >
      <FaTrash size={18} color={"#100903"} />
      {label && <span>{label}</span>}
    </button>
  );
};

