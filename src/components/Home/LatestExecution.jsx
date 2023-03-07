import React from "react";

// components
import LatestExecutionItem from "./LatestExecutionItem";

const LatestExecution = () => {
  return (
    <div className="border-left-gray-1 border-right-gray-1 w-full flex flex-col px-4 py-2.5">
      <h2 className="latest-execution-header text-md font-semibold">
        Latest Execution
      </h2>
      <div className="currency-price-navbar w-full flex flex-row text-xs mt-4">
        <span className="w-5/12 text-left">Price(USDT)</span>
        <span className="w-4/12 text-center">Amount(BTC)</span>
        <span className="w-3/12 text-right relative right-1">Time</span>
      </div>
      <table className="w-full border-separate border-spacing-y-2 lg:border-spacing-y-1.5 xl:border-spacing-y-2">
        <tbody className="w-full text-sm">
          <LatestExecutionItem isRed={true} />
          <LatestExecutionItem isRed={false} />
          <LatestExecutionItem isRed={false} />
          <LatestExecutionItem isRed={false} />
          <LatestExecutionItem isRed={false} />
          <LatestExecutionItem isRed={false} />
          <LatestExecutionItem isRed={true} />
          <LatestExecutionItem isRed={false} />
          <LatestExecutionItem isRed={false} />
          <LatestExecutionItem isRed={true} />
          <LatestExecutionItem isRed={true} />
          <LatestExecutionItem isRed={true} />
        </tbody>
      </table>
    </div>
  );
};

export default LatestExecution;
