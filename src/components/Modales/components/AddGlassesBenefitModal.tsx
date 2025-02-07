import { Modal } from "../Modal"; // Asegúrate de que este Modal esté configurado correctamente
import InputText from "../../ui/InputText";
import { useState } from "react";

export function ModalBody() {
  const [isVisible, setIsVisible] = useState(true);

  // Función para manejar el guardado de datos
  const onSave = () => {
    console.log("Datos guardados:");
    setIsVisible(false); // Cerrar el modal después de guardar los datos
  };

  return (
    <Modal
      title="Añadir prestación"
      btnCancelText="Cancelar"
      btnActionText="Guardar"
      btnActionFunction={onSave}
      isOpen={isVisible}
      modalBody={
        <>
          <InputText
            placeholder="John Doe"
            label="Nombre"
            id="nombre"
            className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-white outline-none"
            labelStyles="text-large font-medium"
          />
          <InputText
            placeholder="john@gmail.com"
            label="Email"
            id="email"
            className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-white outline-none"
            labelStyles="text-large font-medium"
          />
          <InputText
            placeholder="Activo/Inactivo"
            label="Estado"
            id="estado"
            className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-white outline-none"
            labelStyles="text-large font-medium"
          />
          <InputText
            placeholder="Blanco/Negro/Moreno"
            label="Color"
            id="color"
            className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-white outline-none"
            labelStyles="text-large font-medium"
          />
          <InputText
            placeholder="1234567890"
            label="Teléfono"
            id="telefono"
            className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-white outline-none"
            labelStyles="text-large font-medium"
          />
        </>
      }
    />
  );
}
