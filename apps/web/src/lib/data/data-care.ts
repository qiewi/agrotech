// src/data/data-care.ts
export const careStages: Record<string, Array<{
  stage: string;
  description: string;
  steps: { icon: string; label: string }[];
}>> = {
  Tomato: [
    {
      stage: "Pre-Nursery",
      description: "3–4 weeks before transplanting",
      steps: [
        { icon: "🌱", label: "Site Selection & Seed Prep" },
        { icon: "💧", label: "Watering and Plant Protection" },
        { icon: "🌡️", label: "Temperature Control" },
      ],
    },
    {
      stage: "Nursery",
      description: "3–4 weeks after sowing",
      steps: [
        { icon: "🪴", label: "Sow Seeds in Trays/Beds" },
        { icon: "💧", label: "Regular Watering" },
        { icon: "🌞", label: "Provide Sunlight" },
        { icon: "🦠", label: "Disease Monitoring" },
      ],
    },
    {
      stage: "Transplanting",
      description: "At 3–4 weeks after sowing",
      steps: [
        { icon: "🌱", label: "Harden Seedlings" },
        { icon: "🧑‍🌾", label: "Transplant to Field" },
        { icon: "🌧️", label: "Water After Transplant" },
      ],
    },
    {
      stage: "Vegetative",
      description: "2–4 weeks after transplanting",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
      ],
    },
    {
      stage: "Flowering",
      description: "5–7 weeks after transplanting",
      steps: [
        { icon: "🌸", label: "Monitor Flowering" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🧪", label: "Apply Micronutrients" },
      ],
    },
    {
      stage: "Fruiting",
      description: "8–10 weeks after transplanting",
      steps: [
        { icon: "🍅", label: "Monitor Fruit Set" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🦟", label: "Pest & Disease Control" },
        { icon: "🧪", label: "Fertilizer Topdressing" },
      ],
    },
    {
      stage: "Harvest",
      description: "10–14 weeks after transplanting",
      steps: [
        { icon: "🧺", label: "Harvest Ripe Tomatoes" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Corn: [
    {
      stage: "Land Preparation",
      description: "2 weeks before sowing",
      steps: [
        { icon: "🌾", label: "Plowing" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🌱", label: "Seed Selection" },
      ],
    },
    {
      stage: "Sowing",
      description: "Week 0",
      steps: [
        { icon: "🌱", label: "Sow Seeds at Proper Depth" },
        { icon: "📏", label: "Maintain Row Spacing" },
        { icon: "💧", label: "Initial Irrigation" },
      ],
    },
    {
      stage: "Germination",
      description: "1–2 weeks after sowing",
      steps: [
        { icon: "🌱", label: "Monitor Seedling Emergence" },
        { icon: "🦟", label: "Check for Pests" },
        { icon: "💧", label: "Light Irrigation if Needed" },
      ],
    },
    {
      stage: "Vegetative",
      description: "2–6 weeks after sowing",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🧹", label: "Weed Control" },
      ],
    },
    {
      stage: "Tasseling & Silking",
      description: "7–9 weeks after sowing",
      steps: [
        { icon: "🌾", label: "Monitor Tassel & Silk Emergence" },
        { icon: "💧", label: "Maintain Soil Moisture" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
      ],
    },
    {
      stage: "Grain Filling",
      description: "10–14 weeks after sowing",
      steps: [
        { icon: "🌽", label: "Monitor Kernel Development" },
        { icon: "💧", label: "Irrigate as Needed" },
        { icon: "🧪", label: "Nutrient Topdressing" },
      ],
    },
    {
      stage: "Harvest",
      description: "14–16 weeks after sowing",
      steps: [
        { icon: "🌽", label: "Check Grain Maturity" },
        { icon: "🧺", label: "Harvest Ears" },
        { icon: "📦", label: "Dry and Store" },
      ],
    },
  ],
};
