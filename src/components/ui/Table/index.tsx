import { useState, useMemo } from "react";
import { IoFilter, IoSearch, IoAdd, IoTrash, IoPencil } from "react-icons/io5";
import { ModalBody } from "../../Modales/components/AddGlassesBenefitModal"; // Asegúrate de que la importación es correcta

interface DataItem {
  id: number;
  name: string;
  email: string;
  status: string;
  color: string;
  Telefono: number;
}

const data: DataItem[] = [
  {
    id: 1,
    name: "Carlos Ivan",
    email: "lopecito@gmail.com",
    status: "Activo",
    color: "Blanco",
    Telefono: 6311653853,
  },
  {
    id: 2,
    name: "Ramses Garib",
    email: "Ramses@gmail.com",
    status: "Inactivo",
    color: "Moreno",
    Telefono: 6625124321,
  },
  {
    id: 3,
    name: "German Cardona",
    email: "german@gmail.com",
    status: "Activo",
    color: "Negro",
    Telefono: 6311653853,
  },
  {
    id: 4,
    name: "Angel Alexis",
    email: "angelito@gmail.com",
    status: "Activo",
    color: "Negro",
    Telefono: 1234567890,
  },
  {
    id: 5,
    name: "Kimberly Abigail",
    email: "kim@gmail.com",
    status: "Activo",
    color: "Blanca",
    Telefono: 6311820141,
  },
];

export default function TableComponent() {
  const [filter, setFilter] = useState<string>("");
  const [selectedField, setSelectedField] = useState<keyof DataItem>("name");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Estado para abrir el modal de añadir

  const filteredData = useMemo(() => {
    if (!filter.trim()) return data;
    return data.filter((item) =>
      item[selectedField]
        .toString()
        .toLowerCase()
        .includes(filter.toLowerCase())
    );
  }, [filter, selectedField]);

  const handleEdit = (id: number) => {
    console.log("Editar", id);
  };

  const handleDelete = (id: number) => {
    console.log("Eliminar", id);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full h-full">
      {/* Filtros y botones */}
      <div className="flex justify-between items-center mb-4 w-full">
        <div className="flex items-center">
          <label className="text-gray-700">Mostrar:</label>
          <select
            className="border border-gray-300 px-3 py-2 rounded-lg focus:border-green-500 focus:ring-green-500 ml-2"
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value as keyof DataItem)}
          >
            {Object.keys(data[0]).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <p className="text-gray-700 font-semibold">
          Total de datos: {filteredData.length}
        </p>
      </div>
      <div className="flex justify-between items-center mb-4 w-full">
        <button
          className="flex items-center gap-2 text-green-700 border border-green-700 px-4 py-2 rounded-lg hover:bg-green-100"
          onClick={() => setIsFilterModalOpen(true)}
        >
          <IoFilter size={18} />
        </button>
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Buscar..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full border border-gray-300 focus:border-green-500 focus:ring-green-500 px-3 py-2 rounded-lg pl-10"
          />
          <IoSearch className="absolute left-3 top-3 text-gray-400" size={18} />
        </div>
        <button
          className="flex items-center gap-2 text-white bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => {
            setIsAddModalOpen(true);
          }} // Aquí abrimos el modal de añadir
        >
          <IoAdd size={18} />
        </button>
      </div>
      {/* Verificación de si hay datos */}
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500">No hay datos disponibles</p>
      ) : (
        <table className="w-full border-collapse bg-white rounded-lg shadow-md">
          <thead className="bg-green-100">
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th
                  key={key}
                  className="p-3 text-center text-green-800 capitalize"
                >
                  {key}
                </th>
              ))}
              <th className="p-3 text-center text-green-800 capitalize">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-green-50">
                {Object.keys(item).map((key) => (
                  <td
                    key={key}
                    className={`p-3 ${
                      key === "status"
                        ? item[key as keyof DataItem] === "Activo"
                          ? "text-green-600 font-semibold"
                          : "text-red-500 font-semibold"
                        : ""
                    }`}
                  >
                    {item[key as keyof DataItem]}
                  </td>
                ))}
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-yellow-600 hover:bg-yellow-100 px-2 py-1 rounded-lg"
                  >
                    <IoPencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:bg-red-100 px-2 py-1 rounded-lg ml-2"
                  >
                    <IoTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Modal de Añadir - Solo el ModalBody */}
      {isAddModalOpen && <ModalBody />}
    </div>
  );
}
