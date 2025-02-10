import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-xl px-6 flex flex-col justify-start items-start gap-4">
        {/* Top section with logo and description */}
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 bg-gray-200"
                aria-label="Company Logo"
              ></div>
              <div
                className="w-20 h-5 bg-gray-200"
                aria-label="Company Name"
              ></div>
            </div>
            <p className="text-xs text-gray-800 font-normal leading-5">
              Design services for building better products and experiences.
            </p>
          </div>
          {/* Navigation links */}
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-xs text-gray-800 font-normal leading-5"
              >
                Solution
              </a>
              <a
                href="#"
                className="text-xs text-gray-800 font-normal leading-5"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-xs text-gray-800 font-normal leading-5"
              >
                Templates
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-xs text-gray-800 font-normal leading-5"
              >
                Customer Login
              </a>
              <a
                href="#"
                className="text-xs text-gray-800 font-normal leading-5"
              >
                Terms of use
              </a>
              <a
                href="#"
                className="text-xs text-gray-800 font-normal leading-5"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
        {/* Bottom section with social media icons and copyright */}
        <div className="w-full flex justify-between items-center">
          <div className="flex space-x-3">
            <div
              className="w-9 h-9 rounded-full border flex justify-center items-center"
              aria-label="Social Media Icon"
            ></div>
            <div
              className="w-9 h-9 rounded-full border flex justify-center items-center"
              aria-label="Social Media Icon"
            ></div>
            <div
              className="w-9 h-9 rounded-full border flex justify-center items-center"
              aria-label="Social Media Icon"
            ></div>
            <div
              className="w-9 h-9 rounded-full border flex justify-center items-center"
              aria-label="Social Media Icon"
            ></div>
            <div
              className="w-9 h-9 rounded-full border flex justify-center items-center"
              aria-label="Social Media Icon"
            ></div>
          </div>
          <p className="text-xs text-gray-800 font-light text-right leading-4">
            © 2023 Strides. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
