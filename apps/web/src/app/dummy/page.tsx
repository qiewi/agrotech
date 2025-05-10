"use client";

import { useEffect, useRef, useState } from "react";

type SensorData = {
  temperature?: number;
  humidity?: number;
};

export default function Home() {
  const [sensor, setSensor] = useState<SensorData>({});
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch("http://192.168.31.235:8000/sensor");
        if (!res.ok) throw new Error("Gagal fetch data sensor");
        const data: SensorData = await res.json();
        if (isMounted) setSensor(data);
      } catch (err) {
        if (isMounted) setSensor({});
      }
    };

    fetchData();
    intervalRef.current = setInterval(fetchData, 5000);

    return () => {
      isMounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Data Sensor</h1>
      <p>
        Suhu:{" "}
        {sensor.temperature !== undefined
          ? `${sensor.temperature} °C`
          : "Belum ada data"}
      </p>
      <p>
        Kelembapan:{" "}
        {sensor.humidity !== undefined
          ? `${sensor.humidity} %`
          : "Belum ada data"}
      </p>
    </div>
  );
}
