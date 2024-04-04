import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const principalPage = () => {
    navigate("/loginAlumno");
  };

  return (
    <div className="text-white m-0 flex flex-col place-items-center justify-center  h-screen">
      <p className="font-bold text-4xl">Página no encontrada! Error 404</p>
      <button
        onClick={principalPage}
        className="font-bold px-10 py-2 border border-white rounded my-10 hover:bg-slate-800"
      >
        Volver
      </button>
    </div>
  );
}
