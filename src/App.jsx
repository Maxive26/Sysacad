import "./App.css";
// import descarga from '../src/assets/descarga.png'
import { useState } from "react";
import { ChangeTheme } from "./components/ChangeTheme";
import { Title } from "./components/Title";

function App() {
  const [check, setCheck] = useState("password");

  const handleCheck = () => {
    if (check == "password") {
      setCheck("text");
    } else {
      setCheck("password");
    }
  };

  return (
    <>
      <header className="bg-[#FFFFF0] absolute w-full dark:bg-slate-900">
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
            className="absolute max-w-28 top-10 left-10"
          />
        </a>
      </header>
      <main className="m-0 flex place-items-center justify-center h-screen">
        <div className="bg-[#FFFFF0] flex items-center rounded-3xl p-5 gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  dark:bg-slate-900">
          {/* <div className="img">
            <img
              src="./src/assets/descarga.png"
              alt="Logo de la Universidad Tecnologica Nacional"
              className="w-[150px] m-4"
            />
          </div> */}
          <div className="flex gap-3 flex-col px-10">
            <label className="text-black font-bold dark:text-white">
              Legajo
            </label>
            <input
              className="text-black p-1 rounded-lg bg-[#FFFFF0] border-2 border-black focus:outline-none focus:border-sky-600 dark:bg-slate-700 dark:border-gray-500 dark:text-white"
              type="text"
              autoFocus
            />
            <label className="text-black font-bold dark:text-white">
              Contraseña
            </label>
            <label className="text-black relative items-center">
              <input
                className="border-2 border-black p-1 pr-7  bg-[#FFFFF0] rounded-lg focus:outline-none focus:border-sky-600 dark:bg-slate-700 dark:border-gray-500 dark:text-white"
                type={check}
              />
              <input
                className="absolute w-5 h-5 top-[20%] right-2 cursor-pointer pr-7"
                type="checkbox"
                onChange={handleCheck}
                name=""
                id=""
              />
            </label>
            <button className="bg-sky-600 hover:bg-sky-500 text-white rounded-lg p-2 font-medium cursor-pointer text-lg dark:bg-slate-700 dark:hover:bg-slate-500">
              Ingresar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
