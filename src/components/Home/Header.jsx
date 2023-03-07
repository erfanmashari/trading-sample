import React from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import { HiOutlineMoon } from "react-icons/hi";
import { FiDownloadCloud } from "react-icons/fi";
import { CgMenuLeft } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="header w-full flex flex-row justify-between items-center py-4 lg:py-2 px-6">
      <div className="flex flex-row justify-center items-center gap-12 xl:gap-6">
        <img
          src="/images/logo-black.png"
          alt="coinex icon"
          className="coinex-icon"
        />
        <nav className="hidden md:flex flex-row justify-center items-center text-sm gap-8">
          <span className="cursor-pointer">Market</span>
          <span className="cursor-pointer">Fiat</span>
          <span className="cursor-pointer">Swap</span>
          <span className="cursor-pointer">Exchange</span>
          <span className="cursor-pointer">Futures</span>
          <span className="flex flex-row justify-center items-center cursor-pointer">
            Finance <MdOutlineKeyboardArrowDown />
          </span>
          <span className="flex flex-row justify-center items-center cursor-pointer">
            Promotion <MdOutlineKeyboardArrowDown />
          </span>
        </nav>
      </div>
      <div className="hidden xl:flex flex-row justify-center items-center gap-6">
        <div className="flex flex-row justify-center items-center gap-6">
          <button className="text-sm">Log In</button>
          <button className="sign-up-button text-sm text-white rounded">
            Sign UP
          </button>
        </div>
        <div className="flex flex-row justify-center items-center text-lg gap-6">
          <button>
            <RxSpeakerLoud />
          </button>
          <button>
            <HiOutlineMoon />
          </button>
          <button>
            <FiDownloadCloud />
          </button>
        </div>
        <button className="flex flex-row justify-center items-start text-sm">
          English/USD
          <MdOutlineKeyboardArrowDown className="relative bottom-1 text-lg" />
        </button>
      </div>
      <div className="small-screen-header-icons flex xl:hidden justify-center items-center text-2xl gap-4">
        <button>
          <CgProfile />
        </button>
        <button>
          <CgMenuLeft />
        </button>
      </div>
    </header>
  );
};

export default Header;
