import React from "react";
import Pin from "../assets/Pin.tsx";

export default function CurrentWeather() {
  return (
    <div className="bg-[var(--color-principal)] m-4 p-4 rounded-lg flex flex-col items-center">
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        className="w-full"
      />
      <div className="w-full">
        <h2 className="text-[var(--titulo)] text-5xl my-2 font-bold">30°C</h2>
        <p className="text-xl">Soleado</p>
        <p className="text-sm font-light">MAX 32° - MIN 20°</p>
        <div className="flex items-center gap-2 mt-2">
          <p>Bernal Oeste</p>
          <Pin color={"#070707"} />
        </div>
      </div>
    </div>
  );
}
