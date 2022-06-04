import React from "react";

const Balance = () => {
  return (
    <div>
      <div>
        <p className="text-xs font-semibold">YOUR BALANCE</p>
        <p className="text-2xl font-bold">$260.00</p>
      </div>

      <div className=" mt-4 grid grid-flow-col divide-x rounded-lg shadow-sm shadow-gray-400">
        <div className="rounded-l-lg bg-gray-50 py-4 text-center">
          <p className="text-xs font-semibold">INCOME</p>
          <p className="text-lg font-bold text-green-400">$500.00</p>
        </div>

        <div className="rounded-r-lg bg-gray-50 py-4 text-center">
          <p className="text-xs font-semibold">EXPENSE</p>
          <p className="text-lg font-bold text-red-500">$240.00</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
