import React, { useState, useEffect } from "react";
import Container from "../components/Container";

export default function HomePage() {
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container title="Inicio">
      <div className="flex flex-col justify-center items-center h-full md:text-xl">
        <p className="text-neutral-700 font-semibold text-6xl">
          ¡Bienvenido, <span className="text-green-600">Carlos Ivan!</span>
        </p>
        <p className="text-3xl mt-4">{dateTime.date}</p>
        <p className="text-3xl mt-2">{dateTime.time}</p>
      </div>
    </Container>
  );
}
