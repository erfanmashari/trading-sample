import React, { useState } from "react";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import { HiOutlineMoon } from "react-icons/hi";
import { FiDownloadCloud } from "react-icons/fi";
import { CgMenuLeft } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { RiNotification2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoTvOutline } from "react-icons/io5";
import { TbHeartHandshake } from "react-icons/tb";
import { BiLogIn } from "react-icons/bi";

const Header = () => {
  const [navDisplay, setNavDisplay] = useState({
    orders: false,
    assets: false,
    account: false,
  });

  // change navbar menu display values
  const changeDisplay = (parameter, value) => {
    const items = { ...navDisplay };
    items[parameter] = value;
    setNavDisplay(items);
  };

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
        <ul className="flex flex-row justify-center items-center text-sm font-medium gap-6">
          <li
            onMouseLeave={() => changeDisplay("orders", false)}
            className="nav-right-btn h-max relative flex flex-col cursor-pointer"
          >
            <div
              onMouseOver={() => changeDisplay("orders", true)}
              className="w-full flex flex-row"
            >
              Orders{" "}
              {navDisplay.orders ? (
                <MdOutlineKeyboardArrowUp className="text-xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-xl" />
              )}
            </div>
            <span
              className={`nav-right-btn-span ${
                navDisplay.orders ? "flex" : "hidden"
              }`}
            >
              <ul className="nav-right-btn-ul">
                <li>Spot Orders</li>
                <li>Futures Orders</li>
                <li>Swap Orders</li>
                <li>Fiat Orders</li>
                <li>Dock Orders</li>
              </ul>
            </span>
            <span></span>
          </li>
          <li
            onMouseLeave={() => changeDisplay("assets", false)}
            className="nav-right-btn relative flex flex-col cursor-pointer"
          >
            <div
              onMouseOver={() => changeDisplay("assets", true)}
              className="w-full flex flex-row"
            >
              Assets{" "}
              {navDisplay.assets ? (
                <MdOutlineKeyboardArrowUp className="text-xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-xl" />
              )}
            </div>
            <span
              className={`nav-right-btn-span ${
                navDisplay.assets ? "flex" : "hidden"
              }`}
            >
              <ul className="nav-right-btn-ul">
                <li>Asset Overview</li>
                <li>Spot</li>
                <li>Deposit</li>
                <li>Withdraw</li>
                <li>Margin</li>
                <li>Futures</li>
                <li>Financial</li>
                <li>AMM Account</li>
                <li>History</li>
              </ul>
            </span>
          </li>
          <li
            onMouseLeave={() => changeDisplay("account", false)}
            className="nav-right-btn relative flex flex-col cursor-pointer"
          >
            <div
              onMouseOver={() => changeDisplay("account", true)}
              className="w-full flex flex-row"
            >
              Account{" "}
              {navDisplay.account ? (
                <MdOutlineKeyboardArrowUp className="text-xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-xl" />
              )}
            </div>
            <span
              className={`nav-right-btn-span ${
                navDisplay.account ? "flex" : "hidden"
              }`}
              style={{ left: "-135px" }}
            >
              <ul className="nav-right-btn-ul" style={{ color: "#7d7f81" }}>
                <li className="flex flex-col gap-3">
                  <header className="flex flex-row justify-start items-center gap-3 mt-3">
                    <div className="flex flex-col relative">
                      <img
                        src="/images/avatar.png"
                        alt="avatar"
                        className="avatar"
                      />
                      <div className="vip">VIP</div>
                    </div>
                    <div className="unverified">
                      <img
                        src="/images/vector.png"
                        alt="vector"
                        className="vector"
                      />
                      <label>Unverified</label>
                    </div>
                  </header>
                  <p className="account-gmail mb-2">test***l.com</p>
                </li>
                <li className="account-li">
                  <IoPersonOutline className="text-2xl" />
                  Account Settings
                </li>
                <li className="account-li">
                  <MdOutlineRoomPreferences className="text-2xl" />
                  Preferences Settings
                </li>
                <li className="account-li">
                  <BiMessageRoundedDetail className="text-2xl" />
                  Message Center
                </li>
                <li className="account-li">
                  <AiOutlineApi className="text-2xl" />
                  API Management
                </li>
                <li className="account-li">
                  <VscFileSubmodule className="text-2xl" />
                  Sub-Account
                </li>
                <li className="account-li">
                  <IoTvOutline className="text-2xl" />
                  Voucher Center
                </li>
                <li className="account-li">
                  <TbHeartHandshake className="text-2xl" />
                  Referral Rewards
                </li>
                <li className="account-li">
                  <BiLogIn className="text-2xl" />
                  Log Out
                </li>
              </ul>
            </span>
          </li>
          <li className="text-lg font-normal">|</li>
        </ul>
        <div className="flex flex-row justify-center items-center text-lg gap-6">
          <button>
            <RxSpeakerLoud />
          </button>
          <button>
            <HiOutlineMoon />
          </button>
          <button>
            <RiNotification2Line />
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
