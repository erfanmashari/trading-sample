import React from "react";

import { BsStarFill } from "react-icons/bs";

const CurrencyPriceItem = ({ isRed, market }) => {
  return (
    <tr
      className={`w-full text-xs ${
        isRed ? "currency-price-table-red" : "currency-price-table-gray"
      }`}
    >
      <td className="currency-price-table-market w-5/12 relative right-0.5 flex flex-row justify-start items-center text-xs gap-1 text-left">
        <button>
          <BsStarFill className="star text-xs mb-0.5" />
        </button>
        {market}
      </td>
      <td className="w-4/12 text-center">24,593.64</td>
      <td className="w-3/12 text-right">0.77%</td>
    </tr>
  );
};

export default CurrencyPriceItem;
