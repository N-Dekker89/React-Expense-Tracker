import React from "react";

const Transaction = ({ desc, amount, income }) => {
  let color = "";
  let symbol = "";
  if (income === true) {
    color = "bg-green-400";
    symbol = "+";
  } else if (income === false) {
    color = "bg-red-500";
    symbol = "-";
  }

  return (
    <div className="grid h-8 grid-flow-col justify-between rounded bg-gray-50 shadow-sm shadow-gray-400">
      <p className="self-center pl-2">{desc}</p>
      <div className="grid grid-flow-col gap-2">
        <p className="self-center">
          {symbol}
          {amount}
        </p>
        <div className={`${color} w-2 rounded-r`}></div>
      </div>
    </div>
  );
};

export default Transaction;
