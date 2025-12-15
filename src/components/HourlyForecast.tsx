import React, { useState, useRef, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const CustomDot = (props: any) => {
  const { cx, cy, payload, onClick } = props;
  const iconUrl =
    "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg";

  if (cy === undefined) return null;

  return (
    <g
      onClick={(e) => {
        e.stopPropagation();
        onClick(payload);
      }}
      className="cursor-pointer">
      <image x={cx - 16} y={cy - 60} href={iconUrl} width={28} height={28} />
      <text x={cx} y={cy - 60} textAnchor="middle" fontSize={14} fill="black">
        {payload.hour}:00
      </text>
      <text
        x={cx}
        y={cy - 20}
        textAnchor="middle"
        fontSize={14}
        fill="black"
        fontWeight="bold">
        {payload.temperature}°C
      </text>
      <image
        x={cx - 10}
        y={cy + 15}
        href="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/raindrop.svg"
        width={20}
        height={20}
      />
      <text
        x={cx}
        y={cy + 16}
        textAnchor="middle"
        fontSize={12}
        fill="var(--parrafos)"
        fontWeight="bold">
        {payload.rainChance}%
      </text>
    </g>
  );
};

export default function HourlyForecast() {
  const [selectedData, setSelectedData] = useState<any>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const data = [
    { hour: "00", temperature: 22, rainChance: 5 },
    { hour: "01", temperature: 21, rainChance: 3 },
    { hour: "02", temperature: 20, rainChance: 2 },
    { hour: "03", temperature: 19, rainChance: 1 },
    { hour: "04", temperature: 18, rainChance: 0 },
    { hour: "05", temperature: 19, rainChance: 2 },
    { hour: "06", temperature: 22, rainChance: 5 },
    { hour: "07", temperature: 26, rainChance: 10 },
    { hour: "08", temperature: 29, rainChance: 15 },
    { hour: "09", temperature: 32, rainChance: 20 },
    { hour: "10", temperature: 34, rainChance: 25 },
    { hour: "11", temperature: 35, rainChance: 30 },
    { hour: "12", temperature: -36, rainChance: 35 },
    { hour: "13", temperature: 35, rainChance: 40 },
    { hour: "14", temperature: 34, rainChance: 45 },
    { hour: "15", temperature: 33, rainChance: 50 },
    { hour: "16", temperature: 31, rainChance: 45 },
    { hour: "17", temperature: 30, rainChance: 40 },
    { hour: "18", temperature: 28, rainChance: 35 },
    { hour: "19", temperature: 26, rainChance: 30 },
    { hour: "20", temperature: 25, rainChance: 25 },
    { hour: "21", temperature: 24, rainChance: 20 },
    { hour: "22", temperature: 23, rainChance: 15 },
    { hour: "23", temperature: 22, rainChance: 10 },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chartContainerRef.current &&
        !chartContainerRef.current.contains(event.target as Node)
      ) {
        setSelectedData(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDotClick = (payload: any) => {
    if (selectedData && selectedData.hour === payload.hour) {
      setSelectedData(null);
    } else {
      setSelectedData(payload);
    }
  };

  const handleChartClick = () => {
    setSelectedData(null);
  };

  const handleLineClick = (e: any) => {
    e.stopPropagation();

    const chartArea = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - chartArea.left;
    const clickY = e.clientY - chartArea.top;

    const linePoints = e.currentTarget.getAttribute("points");
    if (!linePoints) return;

    const points = linePoints.split(" ").map((point: string) => {
      const [x, y] = point.split(",").map(Number);
      return { x, y };
    });

    let closestPoint = null;
    let minDistance = Infinity;

    for (const point of points) {
      const distance = Math.sqrt(
        Math.pow(point.x - clickX, 2) + Math.pow(point.y - clickY, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestPoint = point;
      }
    }

    if (closestPoint && minDistance < 20) {
      const pointIndex = points.indexOf(closestPoint);
      if (pointIndex >= 0 && pointIndex < data.length) {
        const payload = data[pointIndex];
        handleDotClick(payload);
      }
    }
  };

  return (
    <div className="bg-[var(--color-principal)] m-4 p-4 rounded-lg flex flex-col items-center">
      <h2 className="text-[var(--titulo)] text-2xl font-bold mb-2 w-full">
        Temperatura de hoy
      </h2>
      <div
        ref={chartContainerRef}
        className="overflow-x-auto overflow-y-auto w-full outline-none border-none select-none focus:outline-none"
        tabIndex={-1}>
        <ResponsiveContainer
          width={1200}
          height={300}
          style={{ outline: "none" }}>
          <LineChart
            data={data}
            margin={{ top: 80, right: 30, left: 0, bottom: 50 }}
            onClick={handleChartClick}>
            <XAxis tick={false} />
            <YAxis tick={false} />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="var(--parrafos)"
              strokeWidth={1}
              dot={(props) => <CustomDot {...props} onClick={handleDotClick} />}
              onClick={handleLineClick}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
