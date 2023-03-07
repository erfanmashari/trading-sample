import React, { useState } from "react";

import SpotProgress from "./SpotProgress";

import { BiInfoCircle } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SpotTrading = () => {
  const [isMathDown, setIsMathDown] = useState(false);

  return (
    <div className="spot-trading-container w-full hidden lg:flex flex-col">
      <header className="w-full flex flex-row gap-10 px-4">
        <button className="spot-trading text-md font-semibold pb-1">
          Spot Trading
        </button>
        <button className="margin-trading font-semibold text-md">
          Margin Trading x10
        </button>
      </header>
      <div className="border-top-gray-1 info-icon-color w-full flex flex-col gap-3.5 py-4 px-4">
        <div className="w-full flex xl:hidden flex-row rounded-lg gap-4">
          <button
            className="w-6/12 flex justify-center items-center text-white text-sm font-semibold rounded-lg"
            style={{ height: "30px", backgroundColor: "#0ead98" }}
          >
            Buy
          </button>
          <button
            className="w-6/12 flex justify-center items-center text-sm font-semibold rounded-lg"
            style={{
              height: "30px",
              color: "#707580",
              backgroundColor: "#f0f1f2",
            }}
          >
            Sell
          </button>
        </div>
        <ul className="w-max hidden xl:flex flex-row items-center gap-3">
          <li className="spot-div-button-clicked w-20 xl:w-28 text-xs xl:text-sm text-center rounded py-1.5">
            <button>Limit</button>
          </li>
          <li className="spot-div-button w-20 xl:w-28 text-xs xl:text-sm text-center rounded py-1.5">
            <button>Market</button>
          </li>
          <li className="spot-div-button w-20 xl:w-28 text-xs xl:text-sm text-center rounded py-1.5">
            <button>Stop-Limit</button>
          </li>
          <li className="spot-div-button w-20 xl:w-28 text-xs xl:text-sm text-center rounded py-1.5">
            <button>Stop-Market</button>
          </li>
          <li>
            <button>
              <BiInfoCircle className="info-icon-color text-lg xl:text-2xl" />
            </button>
          </li>
        </ul>
        <ul className="w-full border-bottom-gray-1 flex xl:hidden flex-row items-center gap-10">
          <li className="spot-trading text-sm text-center py-1.5">
            <button>Limit</button>
          </li>
          <li className="latest-execution-header text-sm text-center py-1.5">
            <button>Market</button>
          </li>
          <li className="latest-execution-header text-sm text-center py-1.5">
            <button>Stop-Limit</button>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-3.5">
          <p className="text-sm xl:text-md">Advanced:</p>
          <button className="spot-div-button-clicked flex flex-row justify-center items-center text-xs xl:text-sm text-center rounded gap-0.5 py-0.5 px-1.5 xl:px-2">
            AI{" "}
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </button>
          <button className="spot-div-button text-xs xl:text-sm text-center rounded py-0.5 px-1.5 xl:px-2">
            M
          </button>
          <button className="spot-div-button text-xs xl:text-sm text-center rounded py-0.5 px-1.5 xl:px-2">
            <AiOutlineEye className="text-lg xl:text-xl" />
          </button>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-7 mt-3.5">
          <div className="spot-input spot-div-button flex flex-row justify-between items-center rounded py-2.5">
            <div className="w-8/12 flex flex-row">
              <span className="w-6/12 flex flex-row justify-start items-center text-sm">
                Price
              </span>
              <span className="text-xl">|</span>
            </div>
            <span className="w-4/12 header text-xs text-right">USDT</span>
          </div>
          <div className="spot-input spot-div-button hidden xl:flex flex-row justify-between items-center rounded py-2.5">
            <div className="w-8/12 flex flex-row">
              <span className="w-6/12 flex flex-row justify-start items-center text-sm">
                Price
              </span>
              <span className="text-xl">|</span>
            </div>
            <span className="w-4/12 header text-xs text-right">USDT</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-7">
          <div className="spot-input spot-div-button flex flex-row justify-between items-center rounded py-2.5">
            <div className="w-8/12 flex flex-row">
              <span className="w-6/12 flex flex-row justify-start items-center text-sm">
                Amount
              </span>
              <span className="text-xl">|</span>
            </div>
            <span className="w-4/12 header text-xs text-right">BTC</span>
          </div>
          <div className="spot-input spot-div-button hidden xl:flex flex-row justify-between items-center rounded py-2.5">
            <div className="w-8/12 flex flex-row">
              <span className="w-6/12 flex flex-row justify-start items-center text-sm">
                Amount
              </span>
              <span className="text-xl">|</span>
            </div>
            <span className="w-4/12 header text-xs text-right">BTC</span>
          </div>
        </div>
        <div
          onMouseUp={() => setIsMathDown(false)}
          className="flex flex-row justify-center items-center gap-7 my-0 xl:my-1"
        >
          <SpotProgress
            isMathDown={isMathDown}
            setIsMathDown={setIsMathDown}
            num={1}
          />
          <SpotProgress
            isMathDown={isMathDown}
            setIsMathDown={setIsMathDown}
            num={2}
          />
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-7">
          <div className="spot-input spot-div-button flex flex-row justify-between items-center rounded py-2.5">
            <div className="w-8/12 flex flex-row">
              <span className="w-6/12 flex flex-row justify-start items-center text-sm">
                Value
              </span>
              <span className="text-xl">|</span>
            </div>
            <span className="w-4/12 header text-xs text-right">USDT</span>
          </div>
          <div className="spot-input spot-div-button hidden xl:flex flex-row justify-between items-center rounded py-2.5">
            <div className="w-8/12 flex flex-row">
              <span className="w-6/12 flex flex-row justify-start items-center text-sm">
                Value
              </span>
              <span className="text-xl">|</span>
            </div>
            <span className="w-4/12 header text-xs text-right">USDT</span>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center text-sm gap-7 mt-4">
          <button className="spot-input spot-div-button spot-login flex flex-row justify-center items-center text-center rounded gap-1 py-2.5">
            Login In <span className="dark-gray-2">or</span> Sign Up
          </button>
          <button className="spot-input spot-div-button spot-login hidden xl:flex flex-row justify-center items-center text-center rounded gap-1 py-2.5">
            Login In <span className="dark-gray-2">or</span> Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotTrading;
