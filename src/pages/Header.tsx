import React from 'react';
import Logo from '../assets/Logo.svg';
import IconLogo from '../assets/IconLogo.svg';
// import LogoEcho from '../assets/logoEcho.png';
import Image from 'next/image';
import Link from 'next/link';
import Fetch from '../assets/Fetch.png'

const Header = () => {
  return (
    <div className="py-4 border-b border-white/15">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Container */}
          <div className="flex items-center">
            <Image src={Fetch} alt="logo" className="h-12 w-20" />
            {/* <span className="ml-2 text-lg font-bold">BrandName</span> */}
          </div>

          {/* Navbar Links */}
          <nav className="hidden md:flex space-x-6 ml-10">
            <Link href="/" className="hover:text-gray-300 font-bold">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 font-bold">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-300 font-bold">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-300 font-bold">
              Contact
            </Link>
          </nav>

          {/* Right Side: Button and Icon */}
          <div className="flex gap-4 items-center">
            {/* Login Button */}
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0 rounded-lg">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              <Link href="/login">
                <div className="relative z-10 cursor-pointer">Login</div>
              </Link>
            </button>

            {/* Signup Button */}
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0 rounded-lg">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              <Link href="/signup">
                <div className="relative z-10 cursor-pointer">Signup</div>
              </Link>
            </button>

            {/* Icon Logo */}
            {/* <img src={IconLogo} alt="Icon" className="h-6 w-6" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
