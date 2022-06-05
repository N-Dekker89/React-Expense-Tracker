import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Beer", amount: -9 },
    { id: 2, text: "Tabacco", amount: -11 },
    { id: 3, text: "Salary", amount: +2250 },
    { id: 4, text: "Shoes", amount: -85 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
