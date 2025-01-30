import { NavLink } from "react-router-dom";
import Container from "../components/Container";

export default function NotFound404() {
  return (
    <Container title="">
      <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-700">
        <h2 className="text-6xl font-bold text-green-500">404</h2>
        <p className="text-xl mt-4">Página no encontrada</p>
        <p className="text-gray-500 mt-2">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <NavLink
          to="/home"
          className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-all"
        >
          Volver al inicio
        </NavLink>
      </div>
    </Container>
  );
}
