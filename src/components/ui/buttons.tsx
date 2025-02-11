"use client";

import { CaretRight } from "phosphor-react";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "outline" | "link" | "ghost";
  size: "default" | "small";
  buttonState?: "default" | "hover" | "active" | "focused" | "disabled";
  hasIcon?: boolean;
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
  url?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  buttonState = "default",
  hasIcon = false,
  icon = <CaretRight size={16} />,
  label,
  onClick,
  url,
}) => {
  // Base styles
  const baseStyles = "rounded font-medium transition duration-200 ease-in-out";

  // Variant styles
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "h-12 p-[5px] rounded-[200px] border border-[#0f6fff] justify-center items-center inline-flex hover:bg-[#b2e0ff] hover:border-[#b2e0ff]";
      break;
    case "secondary":
      variantClasses =
        "bg-gray-300 text-gray-800 hover:bg-gray-400 border border-gray-300";
      break;
    case "outline":
      variantClasses =
        "h-[45px] px-5 py-3 rounded-[200px] border border-[#011f32] justify-center items-center gap-1.5 inline-flex";
      break;
    case "link":
      variantClasses =
        "h-[41px] p-2.5 border-b border-[#011f32] justify-center items-center gap-1.5 inline-flex";
      break;
    case "ghost":
      variantClasses =
        "bg-transparent text-blue-600 hover:bg-blue-50 border border-transparent";
      break;
    default:
      variantClasses =
        "bg-blue-600 text-white hover:bg-blue-700 border border-blue-600";
  }

  // Size styles
  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    small: "px-2 py-1 text-xs",
  };

  // State styles
  const stateClasses = {
    default: "",
    hover: "opacity-90",
    active: "scale-95",
    focused: "ring-2 ring-blue-400",
    disabled:
      "opacity-50 cursor-not-allowed hover:bg-inherit hover:border-inherit",
  };

  // Combine classes
  const combinedClasses = [
    baseStyles,
    variantClasses,
    sizeClasses[size],
    stateClasses[buttonState],
  ].join(" ");

  // Button content
  const content = (
    <div className="inline-flex items-center justify-center gap-1">
      <span>{label}</span>
      {hasIcon && icon}
    </div>
  );

  // If there's a URL, handle external vs. internal link
  if (url && buttonState !== "disabled") {
    const isExternal = url.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    } else {
      return (
        <Link href={url} legacyBehavior>
          <a className={combinedClasses}>{content}</a>
        </Link>
      );
    }
  }

  // Otherwise, just render a button
  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={buttonState === "disabled"}
    >
      {variant === "primary" ? (
        <div className="pl-5 pr-[19.50px] pt-[9.41px] pb-[9.39px] bg-[#0f6fff] rounded-[96px] justify-center items-center flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-white text-sm font-normal font-['Space Grotesk'] leading-tight">
              {label}
            </div>
            {hasIcon && icon}
          </div>
        </div>
      ) : variant === "outline" ? (
        <div className="text-center text-[#011f32] text-sm font-normal font-['Space Grotesk'] leading-[21px]">
          {label}
        </div>
      ) : variant === "link" ? (
        <div className="text-center text-[#011f32] text-sm font-normal font-['Space Grotesk'] leading-[21px]">
          {label}
          {hasIcon && icon}
        </div>
      ) : (
        content
      )}
    </button>
  );
};

export default Button;
