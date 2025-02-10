"use client";

import { CheckCircle } from "phosphor-react";
import React from "react";

interface TagProps {
  label: string;
  variant: "default" | "transparent";
  showIcon?: boolean;
  icon?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({
  label,
  variant,
  showIcon = true,
  icon = <CheckCircle size={16} weight="fill" className="text-[#64bc8c]" />,
}) => {
  const baseStyles =
    "h-[34px] rounded-full border justify-center items-center gap-1.5 inline-flex";
  const variantStyles = {
    default:
      "px-4 py-2 bg-gradient-to-b from-[#f6f7f9] to-[#f6f7f9] border-[#e6e9ee]",
    transparent: "bg-transparent border-transparent",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      {showIcon && (
        <div className="w-3.5 h-3.5 p-[3px] justify-center items-center flex">
          {icon}
        </div>
      )}
      <div className="text-[#606d85] text-xs font-normal font-['Space Grotesk'] leading-[18px]">
        {label}
      </div>
    </div>
  );
};

export default Tag;
