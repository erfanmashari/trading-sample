import React from "react";

const StatisticsItem = ({ label, value }) => {
  return (
    <li className="w-20 md:w-fit flex flex-row md:flex-col justify-center items-start text-left text-xs gap-1">
      <span className="dark-gray-2">{label}</span>
      <span
        className={label === "24H Change" ? "statistic-header-item" : "header"}
      >
        {value}
      </span>
    </li>
  );
};

export default StatisticsItem;
