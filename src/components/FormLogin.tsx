import { useState } from "react";
import InputText from "./ui/InputText";
import FormPasswordRecovery from "../components/FormPasswordRecovery";
import { Link } from "react-router-dom";

export default function FormLogin() {
  const [isRecovering, setIsRecovering] = useState<boolean>(false);

  const handleRecoverClick = () => {
    setIsRecovering(true);
  };

  const handleBackToLogin = () => {
    setIsRecovering(false);
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      {!isRecovering ? (
        <>
          <h2 className="text-5xl font-semibold">Bienvenido</h2>
          <p className="font-medium text-large text-gray-500 mt-4">
            Recursos humanos te da la bienvenida
          </p>
          <div className="mt-6 ">
            <InputText
              placeholder="12345678"
              label="No. de Empleado:"
              id="matricula"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent outline-none"
              labelStyles="text-large font-medium"
            />
          </div>
          <div className="mt-8 ">
            <InputText
              placeholder="********"
              label="Contraseña:"
              id="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent outline-none"
              labelStyles="text-large font-medium"
            />
          </div>
          <div className="mt-8 flex flex-col">
            <Link
              to="/home"
              className="active:scale-[.98] active:duration-75 transition-all py-3 rounded-xl bg-green-600 text-white text-lg font-bold hover:scale-[1.01] ease-in-out hover:opacity-80 mb-4 text-center"
            >
              <button>Iniciar Sesión</button>
            </Link>
            <p className="m-auto">
              Olvidé mi contraseña{" "}
              <button
                onClick={handleRecoverClick}
                className="text-green-700 hover:underline"
              >
                Recuperar
              </button>
            </p>
          </div>
        </>
      ) : (
        <FormPasswordRecovery onBack={handleBackToLogin} />
      )}
    </div>
  );
}
