import React, { useEffect, useState } from "react";
import { Moon } from "./svg/Moon.jsx";
import { Sun } from "./svg/Sun.jsx";

export const ChangeTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const [viewTheme, setViewTheme] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setViewTheme(!viewTheme);
  };

  return (
    <button
      onClick={handleChangeTheme}
      className="bg-gray-200 hover:bg-gray-300 rounded-full text-white p-3 dark:bg-gray-700 dark:fill-white dark:hover:bg-slate-500"
    >
      {viewTheme ? <Moon /> : <Sun />}
    </button>
  );
};
