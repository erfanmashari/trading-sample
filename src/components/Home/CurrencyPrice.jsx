import React from "react";

// components
import CurrencyPriceItem from "./CurrencyPriceItem";

import { FiSearch } from "react-icons/fi";

const CurrencyPrice = () => {
  return (
    <div className="border-gray-1 w-full flex flex-col px-4 pt-4">
      <div className="search-box w-full flex flex-row justify-center items-center rounded-lg gap-4 py-1 px-2">
        <FiSearch className="search-icon text-xl" />
        <input
          type="text"
          placeholder="search"
          className="w-full border-none outline-none bg-inherit"
        />
      </div>
      <nav className="currency-price-navbar w-full flex flex-row justify-between items-center text-xs font-bold mt-2 pr-0 xl:pr-10">
        <span className="currency-price-navbar-all rounded cursor-pointer py-1 px-2.5">
          All
        </span>
        <span className="cursor-pointer">Margin</span>
        <span className="cursor-pointer">AMM</span>
        <span className="cursor-pointer">NFTFI</span>
        <span className="cursor-pointer">Web3</span>
        <span className="cursor-pointer">DEFI</span>
      </nav>
      <div className="currency-price-navbar w-full flex flex-row items-center text-xs mt-6 mb-1">
        <span className="w-4/12 2xl:w-5/12 text-left">Market</span>
        <span className="w-4/12 relative left-4 xl:left-6 2xl:left-0 text-center">Price</span>
        <span className="w-4/12 2xl:w-3/12 text-right">
          24H Change
        </span>
      </div>
      <table className="w-full border-separate border-spacing-y-2.5">
        <tbody className="w-full text-sm">
          <CurrencyPriceItem isRed={true} market={"BTC/USDT"} />
          <CurrencyPriceItem isRed={true} market={"APE/USDT"} />
          <CurrencyPriceItem isRed={true} market={"ETH/USDT"} />
          <CurrencyPriceItem isRed={false} market={"ALGO/USDT"} />
          <CurrencyPriceItem isRed={false} market={"CHZ/USDT"} />
          <CurrencyPriceItem isRed={true} market={"APE/USDT"} />
          <CurrencyPriceItem isRed={false} market={"BNB/USDT"} />
          <CurrencyPriceItem isRed={true} market={"DOGE/USDT"} />
          <CurrencyPriceItem isRed={false} market={"NEAR/USDT"} />
          <CurrencyPriceItem isRed={true} market={"ETC/USDT"} />
          <CurrencyPriceItem isRed={false} market={"ROSE/USDT"} />
          <CurrencyPriceItem isRed={true} market={"FIL/USDT"} />
          <CurrencyPriceItem isRed={false} market={"ADA/USDT"} />
          <CurrencyPriceItem isRed={true} market={"DYDX/USDT"} />
          <CurrencyPriceItem isRed={false} market={"AAVE/USDT"} />
          <CurrencyPriceItem isRed={false} market={"OGN/USDT"} />
          <CurrencyPriceItem isRed={true} market={"APE/USDT"} />
          <CurrencyPriceItem isRed={false} market={"OP/USDT"} />
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyPrice;
