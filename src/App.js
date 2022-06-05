import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";

import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <div className="grid grid-flow-row gap-8 bg-gray-100 p-4 font-montserrat">
        <Header />
        <Balance />
        <History />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}
