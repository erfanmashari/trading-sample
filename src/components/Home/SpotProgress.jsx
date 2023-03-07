import React, { useState } from "react";

import { RxDotFilled } from "react-icons/rx";
import { VscCircleOutline } from "react-icons/vsc";

const SpotProgress = ({ isMathDown, setIsMathDown, num }) => {
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  // make states default value on screen resize
  window.addEventListener("resize", (e) => {
    setLeft(0);
    setWidth(0);
  });

  // mousemove event for circle btn
  const changeProgress = (e) => {
    if (!isMathDown) {
      return null;
    }
    const clientX = e.clientX;

    const container = document.querySelector(`.progress-line-container-${num}`);
    const containerRect = container.getBoundingClientRect();

    const leftSize = clientX - containerRect.left + 13;
    const wid = (leftSize * 100) / containerRect.width;
    console.log(wid);
    if (wid >= 0 && wid <= 103) {
      setLeft(leftSize);
      setWidth(wid);
    }
  };

  // change mousedown status
  const changeMouseDownStatus = (value) => {
    setIsMathDown(value);
  };

  return (
    <div
      onMouseMove={changeProgress}
      className={`circles-container spot-input relative ${
        num === 2 ? "hidden xl:flex" : "flex"
      } justify-between items-center`}
      style={{ height: "10px", padding: "0 18px" }}
    >
      <button
        title={`${width > 100 ? 100 : Math.floor(width)}%`}
        onMouseDown={() => changeMouseDownStatus(true)}
        onMouseUp={() => changeMouseDownStatus(false)}
        className="circle-btn"
        style={{ left: `${left}px` }}
      >
        <VscCircleOutline />
      </button>
      <div className="w-full absolute flex flex-row justify-between items-center pr-7">
        <RxDotFilled className="text-xl z-10" />
        <RxDotFilled className="text-xl z-10" />
        <RxDotFilled className="text-xl z-10" />
        <RxDotFilled className="text-xl z-10" />
        <RxDotFilled className="text-xl z-10" />
      </div>
      <div
        onMouseUp={() => changeMouseDownStatus(false)}
        className={`progress-line-container-${num} w-full flex flex-row justify-center items-center`}
      >
        <span
          className="progress-line"
          style={{
            width: `${width}%`,
          }}
        ></span>
        <span
          className="circle-line-through"
          style={{
            width: `${100 - width}%`,
          }}
        ></span>
      </div>
    </div>
  );
};

export default SpotProgress;
