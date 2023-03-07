import React from "react";

const TotalAmountItem = ({ amount, total, isRed }) => {
  return (
    <li
      className={`w-full font-semibold lg:font-normal flex flex-row justify-center items-center relative text-xs ${
        isRed ? "currency-price-table-red" : "currency-price-table-gray"
      }`}
    >
      <div className="w-5/12 lg:w-4/12 xl:w-5/12 text-left z-10">
        {amount[0]}
      </div>
      <div className="currency-price-table-market w-4/12 text-center z-20">
        {amount[1]}
      </div>
      <div className="currency-price-table-market w-3/12 lg:w-4/12 xl:w-3/12 text-right z-10">
        6.5496542
      </div>
      <div
        dir="rtl"
        className="hidden lg:block absolute right-0 rounded z-0"
        style={{
          width: `${(100 * Number(amount[1])) / Number(total)}%`,
          height: "130%",
          backgroundColor: "#fce9ea",
        }}
      ></div>
    </li>
  );
};

export default TotalAmountItem;
