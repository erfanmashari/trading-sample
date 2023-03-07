import React from "react";

// components
import StatisticsItem from "./StatisticsItem";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiStabbedNote } from "react-icons/gi";

const Statistics = () => {
  return (
    <div className="statistics border-bottom-gray-1 border-top-gray-1 w-full h-fit flex flex-row justify-between items-center font-medium lg:font-normal py-3 pr-12 sm:pr-3 xl:pr-12 pl-3">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-6 2xl:gap-12">
        <div className="flex flex-row justify-center items-center gap-2">
          <img
            src="/images/bitcoin.png"
            alt="bitcoin"
            className="w-6 lg:w-8 h-6 lg:h-8"
          />
          <h1 className="dark-gray text-xl">BTC/USDT</h1>
          <button>
            <MdOutlineKeyboardArrowDown className="text-lg" />
          </button>
        </div>
        <span className="header-price text-3xl md:text-lg font-bold md:font-medium">
          24,596.34
        </span>
        <ul className="hidden md:flex flex-row justify-center items-center gap-10 ml-8 2xl:ml-0">
          <StatisticsItem label={"24H Change"} value={"+0.23%"} />
          <StatisticsItem label={"24H Highest"} value={"24897.14"} />
          <StatisticsItem label={"24H Lowest"} value={"24428.93"} />
          <StatisticsItem label={"24H Volume"} value={"244.19"} />
          <StatisticsItem label={"24H Value"} value={"6.01M"} />
        </ul>
      </div>
      <ul className="flex md:hidden flex-col md:flex-row items-center gap-2">
        <StatisticsItem label={"Highest"} value={"24776.99"} />
        <StatisticsItem label={"Lowest"} value={"24776.99"} />
        <StatisticsItem label={"Value(USDT)"} value={"24776.99"} />
      </ul>
      <button className="header-price hidden md:flex flex-row justify-center items-center gap-2">
        <GiStabbedNote className="hidden lg:block text-xl" />
        <span className="text-xs font-bold hidden xl:block">
          Read about Bitcoin
        </span>
      </button>
    </div>
  );
};

export default Statistics;
