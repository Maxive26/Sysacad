import { ChangeThemeIcon } from "./components/ChangeThemeIcon.jsx";
import { Title } from "./components/Title";
import { Main } from "./components/Main.jsx";
import { Logo } from "./components/Logo.jsx";

function App() {
  return (
    <>
      <header className="ease-out duration-100 bg-[#FFFFF0] absolute w-full dark:bg-slate-900">
        <Title />
        <ChangeThemeIcon />
        <Logo />
      </header>
      <main className="m-0 flex flex-col place-items-center justify-center  h-screen">
        <Main />
      </main>
    </>
  );
}

export default App;
