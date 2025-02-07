import { useState } from "react";
// import InputText from "./ui/InputText";
import FormPasswordRecovery from "../components/FormPasswordRecovery";
import { useForm, Controller } from "react-hook-form";
import { useUserStore } from "../../stores/user-store";
import { fetchLogin } from "../../api/Users/fetchLogin";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const { setUser, setToken } = useUserStore();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      matricula: "",
      password: "",
    },
  });

  const onSubmit = async (data: { matricula: string; password: string }) => {
    try {
      const response = await fetchLogin(data);
      if (response.token) {
        console.log("response", response);

        setUser(response.usuario);
        setToken(response.token);

        navigate("/home");
      } else {
        // Si la API devuelve un error, extraemos y mostramos el mensaje
        const errorMessage = response.data || "Error desconocido";
        console.log("Error en la matrícula:", response);

        // Aquí puedes usar un estado o react-hook-form para manejar el mensaje de error
        setError("matricula", { type: "server", message: errorMessage });
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

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
            <Controller
              name="matricula"
              control={control}
              defaultValue=""
              rules={{ required: "La matricula es obligatoria" }}
              render={({ field: { onChange, onBlur, value } }) => (
                // <InputText
                //   onChange={onChange}
                //   placeholder="12345678"
                //   label="No. de Empleado:"
                //   id="matricula"
                //   className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent outline-none"
                //   labelStyles="text-large font-medium"
                // />
                <input
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent outline-none"
                  placeholder="12345678"
                />
              )}
            />
            {errors.matricula && (
              <p className="text-red-500">{errors.matricula.message}</p>
            )}
          </div>

          <div className="mt-8 ">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "La contraseña es necesaria" }}
              render={({ field: { onChange, onBlur, value } }) => (
                <input
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  type="password"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent outline-none"
                  placeholder="*******"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {/* <InputText
              placeholder="********"
              label="Contraseña:"
              id="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent outline-none"
              labelStyles="text-large font-medium"
            /> */}
          </div>
          <div className="mt-8 flex flex-col">
            <button
              className="active:scale-[.98] active:duration-75 transition-all py-3 rounded-xl bg-green-600 text-white text-lg font-bold hover:scale-[1.01] ease-in-out hover:opacity-80 mb-4 text-center"
              onClick={handleSubmit(onSubmit)}
            >
              Iniciar Sesión
            </button>
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
