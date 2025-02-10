import Link from "next/link";
import React from "react";

interface ButtonProps {
  variant: "primary" | "ghost" | "outline";
  label: string;
  onClick?: () => void;
  url?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, label, onClick, url }) => {
  // Define base styles that are common for all buttons
  const baseStyles =
    "px-4 py-2 rounded font-medium transition duration-200 ease-in-out";

  // Define variant-specific styles
  const variantStyles = {
    primary:
      "p-1 rounded-full border border-[#0F6FFF] flex justify-center items-center",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-50",
    outline:
      "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50",
  };

  // Combine base styles with variant-specific styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]}`;

  // Render the button with a link if a URL is provided
  if (url) {
    const isExternal = url.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles}
        >
          {variant === "primary" ? (
            <div className="py-2 px-5 bg-[#0F6FFF] rounded-full text-white">
              {label}
            </div>
          ) : (
            label
          )}
        </a>
      );
    } else {
      return (
        <Link href={url} legacyBehavior>
          <a className={buttonStyles}>
            {variant === "primary" ? (
              <div className="py-2 px-5 bg-[#0F6FFF] rounded-full text-white">
                {label}
              </div>
            ) : (
              label
            )}
          </a>
        </Link>
      );
    }
  }

  // Render the button without a link if no URL is provided
  return (
    <button className={buttonStyles} onClick={onClick}>
      {variant === "primary" ? (
        <div className="py-2 px-5 bg-[#0F6FFF] rounded-full text-white">
          {label}
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
