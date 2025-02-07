import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameDay,
  isSameMonth,
  parseISO,
} from "date-fns";

interface Appointment {
  id: number;
  idTecnico: number;
  idUsuario: number;
  idTicket: number;
  fechaInicio: string;
  fechaFin: string;
  prioridadTicket: "BAJO" | "MEDIO" | "ALTO";
}

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Appointment[] | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));

  const days: Date[] = [];
  let day = startDate;
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  const handlePreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const formatAppointments = (date: Date) =>
    appointments.filter((appt) => isSameDay(parseISO(appt.fechaInicio), date));

  useEffect(() => {
    if (selectedDate) setIsVisible(true);
  }, [selectedDate]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedDate(null), 300);
  };

  return (
    <div className="w-full h-full bg-white shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousMonth}
          className="rounded bg-green-500 text-white hover:bg-green-600 transition lg:p-2 p-1 text-sm md:text-base lg:text-base"
        >
          Anterior
        </button>
        <h2 className="lg:text-2xl md:text-xl text-base font-bold text-green-700">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="rounded bg-green-500 text-white hover:bg-green-600 transition lg:p-2 p-1 text-sm md:text-base lg:text-base"
        >
          Siguiente
        </button>
      </div>

      <div className="grid grid-cols-7 gap-5 text-center text-green-700 font-bold h-[calc(100%-3rem)]">
        {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
        {days.map((date) => (
          <div
            key={date.toString()}
            className={`lg:px-4 lg:py-4 md rounded-lg cursor-pointer transition-all hover:bg-green-300 ${
              isSameMonth(date, currentMonth) ? "bg-neutral-50" : "bg-gray-100"
            } ${isSameDay(date, new Date()) ? "bg-green-400 text-white" : ""}`}
            onClick={() => setSelectedDate(formatAppointments(date))}
          >
            <div className="text-sm font-bold">{format(date, "d")}</div>
          </div>
        ))}
      </div>

      {selectedDate && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-2xl w-96 transform transition-all ${
              isVisible ? "scale-100" : "scale-95"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-green-700">
                Detalles de las citas
              </h2>
              <HiOutlineX
                onClick={handleClose}
                className="text-2xl text-green-700 cursor-pointer hover:text-green-500"
              />
            </div>
            <div className="max-h-60 overflow-auto">
              {selectedDate.length > 0 ? (
                <ul>
                  {selectedDate.map((appt) => (
                    <li key={appt.id} className="mt-2 p-2 bg-green-50 rounded">
                      <p className="text-lg font-semibold">Cita #{appt.id}</p>
                      <p>
                        Hora: {format(parseISO(appt.fechaInicio), "HH:mm")} -{" "}
                        {format(parseISO(appt.fechaFin), "HH:mm")}
                      </p>
                      <p>ID Ticket: {appt.idTicket}</p>
                      <p
                        className={`font-semibold ${
                          appt.prioridadTicket === "BAJO"
                            ? "text-green-500"
                            : appt.prioridadTicket === "ALTO"
                            ? "text-red-500"
                            : "text-yellow-500"
                        }`}
                      >
                        Prioridad: {appt.prioridadTicket}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-green-700">No hay citas para este día.</p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="mt-4 p-2 w-full rounded bg-green-500 text-white hover:bg-green-600 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
