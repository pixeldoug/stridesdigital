"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: string;
  label: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ link, label, className }) => {
  // Get the current path
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      // Remove the <a> tag and apply classes directly to Link
      className={`
        w-full py-2 px-4 flex justify-start items-center 
        hover:border-b-2 hover:border-[#0F6FFF]
        ${isActive ? "border-b-2 border-[#0F6FFF]" : ""}
        ${className ?? ""}
      `}
    >
      <div
        className={`
          text-sm font-normal leading-[21px]
          ${isActive ? "text-[#0F6FFF]" : "text-[#011F32]"}
          hover:text-[#0F6FFF]
        `}
      >
        {label}
      </div>
    </Link>
  );
};

export default NavLink;
