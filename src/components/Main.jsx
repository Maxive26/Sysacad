import React from "react";
import { useState } from "react";
import { Eye } from "./svg/Eye.jsx";
import { NotEye } from "./svg/NotEye.jsx";

export const Main = () => {
  const [check, setCheck] = useState("password");
  const [viewPassword, setViewPassword] = useState();
  const [user, setUser] = useState("");

  const handleCheck = () => {
    if (check == "password") {
      setCheck("text");
      setViewPassword(true);
    } else {
      setCheck("password");
      setViewPassword(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e) => {
    const finalUser = e.target.value;
    if (finalUser.startsWith(" ")) return;
    setUser(finalUser);
  };

  return (
    <>
      <h4 className="ease-out duration-100 text-xl pb-2 font-bold sm:hidden dark:text-white ">
        UTN FRRO
      </h4>
      <h4 className="ease-out duration-100 text-lg pb-2 font-bold sm:hidden dark:text-white">
        Sistema de autogestion de alumnos
      </h4>
      <div className="ease-out duration-100 bg-[#FFFFF0] flex flex-col items-center rounded-3xl p-5 gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  dark:bg-slate-900">
        <form onSubmit={handleSubmit} className="flex gap-3 flex-col px-10">
          <label className="ease-out duration-100 text-black font-bold dark:text-white">
            Legajo
          </label>
          <input
            className="ease-out duration-100 text-black p-1 rounded-lg bg-[#FFFFF0] border-2 border-black focus:outline-none focus:border-sky-600 dark:bg-slate-700 dark:border-gray-500 dark:text-white"
            type="text"
            autoFocus
            value={user}
            onChange={handleChange}
          />
          <label className="ease-out duration-100 text-black font-bold dark:text-white">
            Contraseña
          </label>
          <label className="text-black relative items-center">
            <input
              className="ease-out duration-100 border-2 border-black p-1 pr-7  bg-[#FFFFF0] rounded-lg focus:outline-none focus:border-sky-600 dark:bg-slate-700 dark:border-gray-500 dark:text-white"
              type={check}
            />
            <button
              className=" absolute border-l-2 border-black dark:border-white w-3 h-6 top-[17%] right-2 cursor-pointer pl-3 pr-7"
              onClick={handleCheck}
            >
              {viewPassword ? <NotEye /> : <Eye />}
            </button>
          </label>
          <button className="bg-sky-600 ease-out duration-100  hover:bg-sky-500 text-white rounded-lg p-2 font-medium cursor-pointer text-lg dark:bg-slate-700 dark:hover:bg-slate-500">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};
