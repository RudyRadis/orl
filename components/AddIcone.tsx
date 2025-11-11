"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";

type AddIconeProps = {
  onClick?: () => void;
  className?: string;
};

export const AddIcone: React.FC<AddIconeProps> = ({ onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Ajouter"
      className={`w-12 h-12 bg-[#FF7900] hover:bg-[#ff851a] shadow-md border-[#100903] rounded-full flex items-center justify-center cursor-pointer  ${className ?? ""}`}
    >
      <FaPlus size={24} color="#100903" />
    </button>
  );
};
