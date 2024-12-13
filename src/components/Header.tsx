import Logo from "@/assets/logo.png";
import ShoppingCart from "@/assets/shopping-card.svg";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-yellow-400 shadow-lg">
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                width={25}
                height={25}
              />
            </Link>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="flex gap-8 items-center justify-center font-semibold text-black bg-white py-2 px-5 rounded-full shadow-lg tracking-tight">
              <Link href="#about" className="hover:text-orange-400">About</Link>
              <Link href="#product" className="hover:text-orange-400">Product</Link>
              <Link href="#customer" className="hover:text-orange-400">Customer</Link>
              <Link href="#faq" className="hover:text-orange-400">FaQ</Link>
              <Link href="#contact" className="hover:text-orange-400">Contact</Link>
            </nav>
            <button className="items-center justify-center inline-flex py-2 px-4 gap-1 bg-yellow-300 border-2 border-orange-500 rounded-lg tracking-tighter text-white font-semibold">
              <span>Buy Now</span>
            <ShoppingCart className="w-6 h-6 fill-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
