import React from "react";

const LatestExecutionItem = ({ isRed, market }) => {
  return (
    <tr
      className={`w-full font-semibold lg:font-normal text-xs ${
        isRed ? "currency-price-table-red" : "currency-price-table-gray"
      }`}
    >
      <td className="w-5/12 text-left">24,677.16</td>
      <td className="currency-price-table-market w-4/12 text-center mb-2">
        0.00055589
      </td>
      <td className="search-icon w-3/12 text-right mb-2">
        17:21:14
      </td>
    </tr>
  );
};

export default LatestExecutionItem;
