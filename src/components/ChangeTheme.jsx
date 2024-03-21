import React, { useEffect, useState } from "react";

export const ChangeTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleChangeTheme}
      className="bg-sky-600 text-white dark:bg-slate-700 dark:hover:bg-slate-500"
    >
      Cambiar tema
    </button>
  );
};
