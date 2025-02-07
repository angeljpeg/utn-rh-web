import { useState, ChangeEvent } from "react";
import InputText from "./ui/InputText";

interface Props {
  onBack: () => void;
}

export default function FormPasswordRecovery({ onBack }: Props) {
  return (
    <>
      <button
        onClick={onBack}
        className="mt-4 text-green-700 hover:underline text-center block"
      >
        Regresar al inicio de sesión
      </button>
    </>
  );
}
