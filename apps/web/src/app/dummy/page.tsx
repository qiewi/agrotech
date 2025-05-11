"use client";

import { useEffect, useRef, useState } from "react";

type SensorData = {
  temperature?: number;
  humidity?: number;
};

type AllSensorData = {
  [id: string]: SensorData;
};

// Mapper ID ke Nama Lahan
const LAHAN_MAPPER: Record<string, string> = {
  lahan_1: "Jagung",
  lahan_2: "Padi",
  lahan_3: "Kedelai",
  // Tambahkan sesuai kebutuhan
};

export default function Home() {
  const [allSensors, setAllSensors] = useState<AllSensorData>({});
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch("http://192.168.31.235:8000/sensor");
        if (!res.ok) throw new Error("Gagal fetch data sensor");
        const data: AllSensorData = await res.json();
        if (isMounted) setAllSensors(data);
      } catch (err) {
        if (isMounted) setAllSensors({});
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
      <h1>Data Sensor Semua Lahan</h1>
      <table>
        <thead>
          <tr>
            <th>ID Lahan</th>
            <th>Nama Lahan</th>
            <th>Suhu (°C)</th>
            <th>Kelembapan (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(allSensors).map(([id, sensor]) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{LAHAN_MAPPER[id] || "Tidak diketahui"}</td>
              <td>
                {sensor.temperature !== undefined
                  ? sensor.temperature
                  : "Belum ada data"}
              </td>
              <td>
                {sensor.humidity !== undefined
                  ? sensor.humidity
                  : "Belum ada data"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
