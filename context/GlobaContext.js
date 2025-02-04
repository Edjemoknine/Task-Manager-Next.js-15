"use client";

import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "next-themes";

const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <GlobalContext.Provider value={{ show, setShow }}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="flex relative h-screen p-6 gap-5 dark:bg-[#181818] bg-slate-100">
          {children}
        </div>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);
