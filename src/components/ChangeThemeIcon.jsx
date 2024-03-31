import React, { useEffect, useState } from "react";
import { Moon } from "./svg/Moon.jsx";
import { Sun } from "./svg/Sun.jsx";
import useLocalStorage from "../hooks/useLocalStorage.js";

export const ChangeThemeIcon = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [viewTheme, setViewTheme] = useState(false);

  useEffect(() => {
    //Validar localStorage no el theme
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      setViewTheme(false);
    } else {
      document.querySelector("html").classList.remove("dark");
      setViewTheme(true);
    }
  }, [theme]);

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleChangeTheme}
      //Aca realizar posicionamiento del boton
      className="ease-out duration-100 absolute top-5 right-5 bg-gray-300 hover:bg-gray-400 rounded-full text-white p-3 dark:bg-gray-700 dark:fill-white dark:hover:bg-slate-500"
    >
      {viewTheme ? <Moon /> : <Sun />}
    </button>
  );
};
