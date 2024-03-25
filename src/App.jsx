import "./App.css";
// import descarga from '../src/assets/descarga.png'
import { useState } from "react";
import { ChangeTheme } from "./components/ChangeTheme";
import { Title } from "./components/Title";
import { Eye } from "./components/svg/Eye.jsx";
import { NotEye } from "./components/svg/NotEye.jsx";

function App() {
  const [check, setCheck] = useState("password");
  const [viewPassword, setViewPassword] = useState();

  const handleCheck = () => {
    if (check == "password") {
      setCheck("text");
      setViewPassword(true);
    } else {
      setCheck("password");
      setViewPassword(false);
    }
  };

  const send = () => {
    alert("[!] Proximamente...");
  };

  return (
    <>
      <header className="ease-out duration-100 bg-[#FFFFF0] absolute w-full dark:bg-slate-900">
        <Title />
        <ChangeTheme />
        <a
          href="https://www.frro.utn.edu.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./src/assets/descarga.png"
            alt=""
            className="absolute lg:max-w-28 lg:block md:block md:max-w-20 max-w-16 top-3 left-3 lg:top-10 lg:left-10"
          />
        </a>
      </header>
      <main className="m-0 flex flex-col place-items-center justify-center  h-screen">
        <h4 className="ease-out duration-100 text-xl pb-2 font-bold sm:hidden dark:text-white ">
          UTN FRRO
        </h4>
        <h4 className="ease-out duration-100 text-lg pb-2 font-bold sm:hidden dark:text-white">
          Sistema de autogestion de alumnos
        </h4>
        <div className="ease-out duration-100 bg-[#FFFFF0] flex flex-col items-center rounded-3xl p-5 gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  dark:bg-slate-900">
          <div className="flex gap-3 flex-col px-10">
            <label className="ease-out duration-100 text-black font-bold dark:text-white">
              Legajo
            </label>
            <input
              className="ease-out duration-100 text-black p-1 rounded-lg bg-[#FFFFF0] border-2 border-black focus:outline-none focus:border-sky-600 dark:bg-slate-700 dark:border-gray-500 dark:text-white"
              type="text"
              autoFocus
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
                className="absolute border-l-2 border-black dark:border-white w-3 h-6 top-[17%] right-2 cursor-pointer pl-3 pr-7"
                onClick={handleCheck}
              >
                {viewPassword ? <NotEye /> : <Eye />}
              </button>
            </label>
            <button
              onClick={send}
              className="bg-sky-600 ease-out duration-100  hover:bg-sky-500 text-white rounded-lg p-2 font-medium cursor-pointer text-lg dark:bg-slate-700 dark:hover:bg-slate-500"
            >
              Ingresar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
