// src/data/data-fertilization.ts
export const fertilizationSchedule: Record<string, Array<{
  stage: string;
  amount: string;
  note: string;
}>> = {
  Tomato: [
    {
      stage: "Pre-planting",
      amount: "10 kg/ha",
      note: "Apply 7 days before transplanting",
    },
    // ...schedule lain untuk Tomato
  ],
  Corn: [
    {
      stage: "Pre-planting",
      amount: "8 kg/ha",
      note: "Apply 5 days before sowing",
    },
    // ...schedule lain untuk Corn
  ],
  // Tambahkan tanaman lain
};
