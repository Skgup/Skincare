import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1e2b26] text-white h-[55vh] md:h-[55vh] lg:h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between py-16 gap-12 md:gap-0">
        {/* Left Column (Desktop) */}
        <div className="hidden lg:flex flex-1 flex-col items-start justify-center w-full md:w-auto">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-normal mb-28 leading-tight">
            Join The Skincare <br className="hidden md:block" /> Community Now.
          </h2>
          <div className="flex flex-row gap-10 md:gap-12 text-base md:text-lg font-medium text-gray-200">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">YouTube</a>
          </div>
        </div>
        {/* Right Column (Desktop) */}
        <div className="hidden lg:flex flex-1 flex-col items-start md:items-end justify-center w-full md:w-auto h-full">
          <div>
            <div className="text-sm md:text-base text-gray-300 mb-2">Get in Touch</div>
            <a href="mailto:contact.skincare.com" className="text-2xl md:text-3xl font-normal text-white hover:underline block mb-12 md:mb-20">contact.skincare.com</a>
          </div>
          <div className="flex flex-row gap-8 md:gap-10 text-sm md:text-base text-gray-200 mt-auto">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies Policy</a>
          </div>
        </div>
        {/* Tablet only (md: 768px - 1023px) */}
        <div className="hidden md:flex lg:hidden w-full flex-col h-full justify-center">
          {/* First row: Left column (heading + social links) - left aligned */}
          <div className="flex flex-col items-start text-left mb-12 w-full">
            <h2 className="text-3xl font-normal text-left mb-8">Join The Skincare <br /> Community Now.</h2>
            <div className="flex flex-row gap-12 text-base font-medium text-gray-200">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">YouTube</a>
            </div>
          </div>
          {/* Second row: Right column (get in touch + contact + policy links) - left aligned */}
          <div className="flex flex-col items-start text-left w-full">
            <div className="flex flex-col items-start mb-8">
              <span className="text-sm text-gray-300 mb-2">Get in Touch</span>
              <span className="text-2xl font-normal text-white">contact.skincare.com</span>
            </div>
            <div className="flex flex-row gap-8 text-sm text-gray-200">
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cookies Policy</a>
            </div>
          </div>
        </div>
        {/* Mobile only (below md) */}
        <div className="flex md:hidden w-full flex-col h-full justify-center">
          {/* First row: Left column (heading + social links) - left aligned */}
          <div className="flex flex-col items-start text-left mb-8 w-full">
            <h2 className="text-2xl font-normal text-left mb-6">Join The Skincare <br /> Community Now.</h2>
            <div className="flex flex-row gap-8 text-base font-medium text-gray-200">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">YouTube</a>
            </div>
          </div>
          {/* Second row: Right column (get in touch + contact + policy links) - left aligned */}
          <div className="flex flex-col items-start text-left w-full">
            <div className="flex flex-col items-start mb-6">
              <span className="text-xs text-gray-300 mb-1">Get in Touch</span>
              <span className="text-lg font-normal text-white">contact.skincare.com</span>
            </div>
            <div className="flex flex-row gap-6 text-xs text-gray-200">
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
      {/* Large faint SKINCARE branding text */}
      <div className="pointer-events-none select-none absolute bottom-0 right-0 w-full flex justify-end z-0">
        <span className="font-extrabold text-[22vw] text-white opacity-5 leading-none tracking-tighter   lg:translate-y-27  md:translate-y-15 translate-y-8  whitespace-nowrap">
          SKINCARE
        </span>
      </div>
    </footer>
  );
};

export default Footer;