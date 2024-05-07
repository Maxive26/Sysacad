import React from "react";

export const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="ease-out duration-100 p-5 hidden lg:block lg:text-5xl md:block sm:block font-bold md:text-2xl dark:text-white">
        Universidad tecnológica Nacional
      </h1>
      <h2 className="ease-out duration-100 hidden lg:block lg:text-4xl md:block md:text-xl sm:block font-bold dark:text-white">
        Facultad regional Rosario
      </h2>
      <p className="ease-out duration-100  hidden mt-3 lg:block lg:mt-10 sm:block md:block mb-6 lg:text-xl md:text-base dark:text-white">
        Sistema de autogestión de Alumnos
      </p>
    </div>
  );
};
