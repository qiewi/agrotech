// src/data/data-care.ts
export const careStages: Record<string, Array<{
  stage: string;
  description: string;
  steps: { icon: string; label: string }[];
}>> = {
  Tomato: [
    {
      stage: "Pre Nursery",
      description: "3 - 4 Weeks before Transplanting",
      steps: [
        { icon: "🌱", label: "Site Selection & Seed Prep" },
        { icon: "💧", label: "Watering and Plant Protection" },
        { icon: "🌡️", label: "Temperature Control" },
      ],
    },
    // ...stage lain untuk Tomato
  ],
  Corn: [
    {
      stage: "Land Preparation",
      description: "2 Weeks before Sowing",
      steps: [
        { icon: "🌾", label: "Plowing" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🌱", label: "Seed Selection" },
      ],
    },
    // ...stage lain untuk Corn
  ],
  // Tambahkan tanaman lain
};
