import { createContext } from "react";

export const TableContext = createContext(
  {} as {
    refreshData: () => void;
  }
);
