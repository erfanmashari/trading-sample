import TradingViewWidget from "./TradingViewWidget";

import React, { Fragment } from "react";

import { FaExpandAlt } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const Chart = () => {
  return (
    <Fragment>
      <ul
        className="dark-gray-1 flex md:hidden flex-row justify-start items-center text-sm sm:text-md gap-3 sm:gap-6 px-3 pt-3 sm:px-8"
        style={{ borderBottom: "1px solid #d4d5d8" }}
      >
        <li className="spot-trading pb-1.5">Chart</li>
        <li className="pb-1.5">Orders</li>
        <li className="pb-1.5">Latest Execution</li>
        <li className="pb-1.5">Coin Introduction</li>
      </ul>
      <div className="w-full flex flex-col gap-3 rounded-lg lg:rounded-2xl overflow-hidden pt-3 pb-4">
        <header className="w-full flex flex-row lg:flex-col xl:flex-row justify-between lg:justify-start xl:justify-between gap-2 px-3">
          <ul className="chart-time flex flex-row text-sm gap-4">
            <li className="cursor-pointer">Time</li>
            <li className="cursor-pointer">15m</li>
            <li className="cursor-pointer">1H</li>
            <li className="cursor-pointer">4H</li>
            <li className="cursor-pointer">1D</li>
            <li className="cursor-pointer">1W</li>
            <li className="cursor-pointer">1Y</li>
            <li className="cursor-pointer chart-icons text-lg">
              <TbAdjustmentsHorizontal />
            </li>
          </ul>
          <ul className="chart-type flex flex-row text-sm gap-6">
            <li className="cursor-pointer">Original</li>
            <li className="chart-type-bg cursor-pointer px-1.5 rounded">
              TradingView
            </li>
            <li className="cursor-pointer">Depth</li>
            <li className="chart-icons text-md">
              <FaExpandAlt />
            </li>
          </ul>
        </header>
        <TradingViewWidget />
        <ul className="w-full chart-time flex flex-row text-sm gap-4 px-3">
          <li className="cursor-pointer">5y</li>
          <li className="cursor-pointer">1y</li>
          <li className="cursor-pointer">6m</li>
          <li className="cursor-pointer">3m</li>
          <li className="cursor-pointer">1m</li>
          <li className="cursor-pointer">5d</li>
          <li className="cursor-pointer">1d</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Chart;
