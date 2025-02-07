import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";

interface ModalProps {
  title: string;
  btnCancelText: string;
  btnActionText: string;
  btnActionFunction: () => void;
  modalBody: React.ReactNode;
  isOpen: boolean;
}

export function Modal({
  title,
  btnCancelText,
  btnActionText,
  btnActionFunction,
  modalBody,
  isOpen,
}: ModalProps) {
  const onClose = () => {
    isOpen = false;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-50">
      <div className="p-4 rounded-lg w-full max-w-md bg-white shadow-lg transition-transform duration-300 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          {/* Al hacer clic en el ícono de la "X", llamamos a la función onClose */}
          <HiOutlineX
            onClick={() => onClose()} // Cierra el modal
            className="text-3xl cursor-pointer text-gray-600 hover:text-gray-800 transition"
          />
        </div>

        {/* Body */}
        <div className="p-2 mb-4 max-h-60 overflow-y-auto">{modalBody}</div>

        {/* Footer (Botones) */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onClose()} // Al hacer clic en "Cancelar", también cerramos el modal
            className="p-2 rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            {btnCancelText}
          </button>
          <button
            onClick={btnActionFunction}
            className="p-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
          >
            {btnActionText}
          </button>
        </div>
      </div>
    </div>
  );
}
