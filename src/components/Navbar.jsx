import React from "react";
import bag from "../assets/svgs/bag.svg";
import wishlist from "../assets/svgs/wishlist.svg";
import user from "../assets/svgs/user.svg";

export default function Navbar() {
  return (
    <nav className="max-sm:px-4 md:px-4 flex items-center justify-between py-6 max-w-6xl mx-auto nav">
      {/* Logo */}
      <div className="font-bold font-inter text-2xl text-[#2D3B36]">SKINCARE</div>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-[#2D3B36] font-semibold">
        <a className="hover:underline cursor-pointer">All Products</a>
        <a className="hover:underline cursor-pointer">Serum</a>
        <a className="hover:underline cursor-pointer">Sunscreen</a>
        <a className="hover:underline cursor-pointer">Bundle</a>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5 ">
        {/* Cart */}
        <button aria-label="Cart" className="flex transition-transform duration-200 hover:scale-110  hover:bg-[#E6E9E2] rounded-2xl">
          <img src={bag} alt="Cart" className="w-6 h-6" /> <span className="hidden lg:block">Cart (1)</span>
        </button>

        {/* Wishlist */}
        <button aria-label="Wishlist" className="transition-transform duration-200 hover:scale-110 hover:bg-[#E6E9E2] rounded-2xl">
          <img src={wishlist} alt="Wishlist" className="w-6 h-6" />
        </button>

        {/* User */}
        <button aria-label="User" className="transition-transform duration-200 hover:scale-110 hover:bg-[#E6E9E2] rounded-2xl">
          <img src={user} alt="User" className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
