import React from "react";

const NewTransaction = () => {
  return (
    <div className="grid grid-flow-row gap-2">
      <h1 className="text-lg font-bold">Add new transaction</h1>
      <hr className="h-0.5 bg-black" />
      <div className="grid grid-flow-row gap-2 ">
        <div className="grid grid-flow-row">
          <p className="mt-2 font-semibold">Text</p>
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Enter text..."
            className="mt-0.5 rounded p-2 shadow-sm shadow-gray-400"
          />
        </div>
        <div className="mt-2 grid grid-flow-row">
          <p className="font-semibold">Amount</p>
          <p className="font-semibold">
            (negative - expense, positive - income)
          </p>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            className="mt-0.5 rounded p-2 shadow-sm shadow-gray-400"
          />
        </div>
        <button className="mt-2 rounded bg-purple-500 p-2 font-bold text-white shadow-sm shadow-gray-400">
          Add transaction
        </button>
      </div>
    </div>
  );
};

export default NewTransaction;
