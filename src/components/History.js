import React from "react";
import Transaction from "./Transaction";

const History = () => {
  return (
    <div className="grid grid-flow-row gap-2">
      <h1 className="text-lg font-bold">History</h1>
      <hr className="h-0.5 bg-black" />
      <div className="grid grid-flow-row gap-2 ">
        <Transaction desc={"Cash"} amount={500} income={true} />
        <Transaction desc={"Book"} amount={40} income={false} />
        <Transaction desc={"Camera"} amount={200} income={false} />
      </div>
    </div>
  );
};

export default History;
