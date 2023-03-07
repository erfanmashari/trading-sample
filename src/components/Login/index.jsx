import React from "react";

// components
import Header from "./Header";
import CurrencyPrice from "./CurrencyPrice";
import LatestExecution from "./LatestExecution";
import Statistics from "./Statistics";
import TotalAmount from "./TotalAmount";
import Chart from "./Chart";
import SpotTrading from "./SpotTrading";
import SpotTradingSmallScreen from "./SpotTradingSmallScreen";

const Login = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-1 lg:pb-2">
      <Header />
      <main className="w-full flex flex-row">
        <div className="w-30-percent hidden lg:flex flex-col">
          <CurrencyPrice />
          <LatestExecution />
        </div>
        <div className="w-70-percent flex flex-col">
          <Statistics />
          <div className="w-full flex flex-row">
            <div className="w-full md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 flex flex-col">
              <Chart />
              <SpotTrading />
              <div className="w-full hidden md:flex lg:hidden flex-row">
                <LatestExecution />
                <TotalAmount />
              </div>
            </div>
            <div className="w-full lg:w-5/12 xl:w-4/12 2xl:w-3/12 hidden lg:flex">
              <TotalAmount />
            </div>
            <div className="w-4/12 hidden md:block lg:hidden">
              <SpotTradingSmallScreen />
            </div>
          </div>
        </div>
        <div
          className="w-full fixed bottom-0 flex md:hidden flex-row justify-center items-center bg-white gap-4"
          style={{ height: "66px", padding: "0 20px" }}
        >
          <button
            className="w-6/12 flex justify-center items-center rounded-lg text-white text-sm font-semibold"
            style={{ height: "40px", backgroundColor: "#0ead98" }}
          >
            Buy
          </button>
          <button
            className="w-6/12 flex justify-center items-center rounded-lg text-white text-sm font-semibold"
            style={{ height: "40px", backgroundColor: "#db5541" }}
          >
            Sell
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
