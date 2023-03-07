import React, { useState, useEffect } from "react";

// components
import TotalAmountItem from "./TotalAmountItem";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TotalAmount = () => {
  const [amounts, setAmounts] = useState({ ask: [], bid: [] });

  useEffect(() => {
    let socket = new WebSocket("wss://api.exirpro.ir:2023/?market=BTCUSDT");

    socket.onopen = function (e) {
      console.log("[open] Connection established");
    };

    socket.onmessage = function (event) {
      setAmounts(event.data ? JSON.parse(event.data) : { ask: [], bid: [] });
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        console.log(
          `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
        );
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        console.log("[close] Connection died");
      }
    };

    socket.onerror = function (error) {
      console.log(error);
    };
  }, []);

  // get total amount of ask
  let askTotal = 0;
  amounts.ask.forEach((amount, index) => {
    askTotal += Number(amount[1]);
  });

  // get total amount of bid
  let bidTotal = 0;
  amounts.bid.forEach((amount, index) => {
    bidTotal += Number(amount[1]);
  });

  return (
    <div className="border-left-gray-1 border-right-gray-1 w-full flex flex-col gap-3 py-2.5">
      <div className="w-full h-5 hidden lg:flex flex-row justify-center items-center rounded-lg overflow-hidden px-2 lg:px-5">
        <div className="percent-25 w-4/12 h-full flex justify-start items-center text-xs rounded-l-lg pl-2">
          25.84%
        </div>
        <div className="percent-75 w-8/12 h-full flex justify-end items-center text-right rounded-r-lg text-xs pr-2">
          74.16%
        </div>
      </div>
      <div className="currency-price-navbar w-full flex flex-row text-xs my-1 2xl:my-2.5 px-5">
        <span className="w-5/12 text-left">Price(USDT)</span>
        <span className="w-4/12 flex flex-row justify-center items-center text-center">
          Amount <span className="hidden xl:block">(BTC)</span>
        </span>
        <span className="w-3/12 text-right">Total(BTC)</span>
      </div>
      <ul className="total-amount-list w-full flex flex-col border-separate border-spacing-2.5 overflow-y-scroll gap-2 px-2 lg:px-5">
        {amounts.bid.map((amount, index) => (
          <TotalAmountItem
            key={index}
            isRed={true}
            width={"0"}
            amount={amount}
            total={bidTotal}
          />
        ))}
      </ul>
      <div className="border-top-gray-1 border-bottom-gray-1 w-full flex flex-row justify-between items-center text-center 2xl:text-left py-2 px-4">
        <div className="flex flex-col justify-start items-start">
          <span className="currency-price-table-gray text-md font-semibold">
            25,593.64
          </span>
          <span className="dark-gray-2 text-xs">~26,628.71 USD</span>
        </div>
        <span className="dark-gray-2 text-xs font-semibold">
          Index: 24632.16
        </span>
        <MdOutlineKeyboardArrowRight className="dark-gray-2 text-xl" />
      </div>
      <ul className="total-amount-list w-full flex flex-col overflow-y-scroll gap-2 px-2 lg:px-5">
        {amounts.ask.map((amount, index) => (
          <TotalAmountItem
            key={index}
            isRed={false}
            width={"0"}
            amount={amount}
            total={askTotal}
          />
        ))}
      </ul>
    </div>
  );
};

export default TotalAmount;
