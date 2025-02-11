"use client";

import { List, X } from "phosphor-react";
import React, { useState } from "react";

import Button from "../buttons";
import Image from "next/image";
import NavLink from "../navigation/navLink";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex flex-col items-center content-center justify-center py-2">
      {/* Top Nav Bar */}
      <div className="w-full md:w-[992px] flex flex-col md:flex-row items-center justify-between content-between gap-6  px-6">
        {/* Left side */}
        <div className="flex flex-row items-center justify-center gap-6">
          {/* (Logo) */}
          <Image
            src="/strides-logo-vector.svg"
            alt="Strides Digital Logo"
            width={112}
            height={30}
          />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink link="/" label="Solution" />
            <NavLink link="/test" label="Pricing" />
            <NavLink link="/test" label="Templates" />
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            label="Login"
            url="https://billing.stripe.com/p/login/4gw8xg46U6RdaRO288"
            size={"small"}
          />
          <Button
            variant="primary"
            label="Pricing & Start"
            url="/"
            size={"small"}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#011F32]">
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-4 space-y-4 pb-4 transition-all duration-300">
          <NavLink link="/page" label="Solution" />
          <NavLink link="/" label="Pricing" />
          <NavLink link="/" label="Templates" />
          <div className="cursor-pointer text-[#011F32]">Login</div>
          <div className="p-1 rounded-full border border-[#0F6FFF] flex justify-center items-center">
            <div className="py-2 px-5 bg-[#0F6FFF] rounded-full text-white">
              Pricing & Start
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
