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
  Eggplant: [
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
      description: "2–5 weeks after transplanting",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
      ],
    },
    {
      stage: "Flowering",
      description: "6–8 weeks after transplanting",
      steps: [
        { icon: "🌸", label: "Monitor Flowering" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🧪", label: "Apply Micronutrients" },
      ],
    },
    {
      stage: "Fruiting",
      description: "9–12 weeks after transplanting",
      steps: [
        { icon: "🍆", label: "Monitor Fruit Set" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🦟", label: "Pest & Disease Control" },
        { icon: "🧪", label: "Fertilizer Topdressing" },
      ],
    },
    {
      stage: "Harvest",
      description: "12–16 weeks after transplanting",
      steps: [
        { icon: "🧺", label: "Harvest Mature Eggplants" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Potato: [
    {
      stage: "Land Preparation",
      description: "2 weeks before planting",
      steps: [
        { icon: "🌾", label: "Plowing" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🥔", label: "Seed Tuber Selection" },
      ],
    },
    {
      stage: "Planting",
      description: "Week 0",
      steps: [
        { icon: "🥔", label: "Plant Seed Tubers" },
        { icon: "📏", label: "Maintain Row Spacing" },
        { icon: "💧", label: "Initial Irrigation" },
      ],
    },
    {
      stage: "Sprouting",
      description: "2–3 weeks after planting",
      steps: [
        { icon: "🌱", label: "Monitor Sprout Emergence" },
        { icon: "🦟", label: "Check for Pests" },
        { icon: "💧", label: "Light Irrigation if Needed" },
      ],
    },
    {
      stage: "Vegetative",
      description: "3–7 weeks after planting",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
      ],
    },
    {
      stage: "Tuber Initiation",
      description: "5–7 weeks after planting",
      steps: [
        { icon: "🥔", label: "Monitor Tuber Formation" },
        { icon: "💧", label: "Maintain Soil Moisture" },
        { icon: "🧪", label: "Apply Potassium Fertilizer" },
      ],
    },
    {
      stage: "Bulking",
      description: "8–12 weeks after planting",
      steps: [
        { icon: "🥔", label: "Monitor Tuber Growth" },
        { icon: "💧", label: "Irrigate as Needed" },
        { icon: "🦟", label: "Pest & Disease Control" },
      ],
    },
    {
      stage: "Harvest",
      description: "12–16 weeks after planting",
      steps: [
        { icon: "🧺", label: "Harvest Mature Tubers" },
        { icon: "📦", label: "Sort and Store" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Chili: [
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
      description: "2–5 weeks after transplanting",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
      ],
    },
    {
      stage: "Flowering",
      description: "6–8 weeks after transplanting",
      steps: [
        { icon: "🌸", label: "Monitor Flowering" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🧪", label: "Apply Micronutrients" },
      ],
    },
    {
      stage: "Fruiting",
      description: "9–12 weeks after transplanting",
      steps: [
        { icon: "🌶️", label: "Monitor Fruit Set" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🦟", label: "Pest & Disease Control" },
        { icon: "🧪", label: "Fertilizer Topdressing" },
      ],
    },
    {
      stage: "Harvest",
      description: "12–16 weeks after transplanting",
      steps: [
        { icon: "🧺", label: "Harvest Mature Chilies" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Bellpepper: [
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
      description: "2–5 weeks after transplanting",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
      ],
    },
    {
      stage: "Flowering",
      description: "6–8 weeks after transplanting",
      steps: [
        { icon: "🌸", label: "Monitor Flowering" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🧪", label: "Apply Micronutrients" },
      ],
    },
    {
      stage: "Fruiting",
      description: "9–12 weeks after transplanting",
      steps: [
        { icon: "🫑", label: "Monitor Fruit Set" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🦟", label: "Pest & Disease Control" },
        { icon: "🧪", label: "Fertilizer Topdressing" },
      ],
    },
    {
      stage: "Harvest",
      description: "12–16 weeks after transplanting",
      steps: [
        { icon: "🧺", label: "Harvest Mature Bell Peppers" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Cucumber: [
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
      description: "2–4 weeks after sowing",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
        { icon: "🪢", label: "Provide Trellis/Support" },
      ],
    },
    {
      stage: "Flowering",
      description: "4–6 weeks after sowing",
      steps: [
        { icon: "🌸", label: "Monitor Flowering" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🧪", label: "Apply Micronutrients" },
        { icon: "🐝", label: "Encourage Pollination" },
      ],
    },
    {
      stage: "Fruiting",
      description: "6–8 weeks after sowing",
      steps: [
        { icon: "🥒", label: "Monitor Fruit Set" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🦟", label: "Pest & Disease Control" },
        { icon: "🧪", label: "Fertilizer Topdressing" },
      ],
    },
    {
      stage: "Harvest",
      description: "8–10 weeks after sowing",
      steps: [
        { icon: "🧺", label: "Harvest Mature Cucumbers" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Ginger: [
    {
      stage: "Land Preparation",
      description: "2–3 weeks before planting",
      steps: [
        { icon: "🌾", label: "Plowing" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🫚", label: "Seed Rhizome Selection" },
      ],
    },
    {
      stage: "Planting",
      description: "Week 0",
      steps: [
        { icon: "🫚", label: "Plant Seed Rhizomes" },
        { icon: "📏", label: "Maintain Row Spacing" },
        { icon: "💧", label: "Initial Irrigation" },
      ],
    },
    {
      stage: "Sprouting",
      description: "3–5 weeks after planting",
      steps: [
        { icon: "🌱", label: "Monitor Sprout Emergence" },
        { icon: "🦟", label: "Check for Pests" },
        { icon: "💧", label: "Light Irrigation if Needed" },
      ],
    },
    {
      stage: "Vegetative",
      description: "1–5 months after planting",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
        { icon: "🪴", label: "Earthing Up" },
      ],
    },
    {
      stage: "Rhizome Development",
      description: "5–8 months after planting",
      steps: [
        { icon: "🫚", label: "Monitor Rhizome Growth" },
        { icon: "💧", label: "Maintain Soil Moisture" },
        { icon: "🧪", label: "Apply Potassium Fertilizer" },
      ],
    },
    {
      stage: "Harvest",
      description: "8–10 months after planting",
      steps: [
        { icon: "🧺", label: "Harvest Mature Rhizomes" },
        { icon: "📦", label: "Sort and Store" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Broccoli: [
    {
      stage: "Pre-Nursery",
      description: "4–6 weeks before transplanting",
      steps: [
        { icon: "🌱", label: "Site Selection & Seed Prep" },
        { icon: "💧", label: "Watering and Plant Protection" },
        { icon: "🌡️", label: "Temperature Control" },
      ],
    },
    {
      stage: "Nursery",
      description: "4–6 weeks after sowing",
      steps: [
        { icon: "🪴", label: "Sow Seeds in Trays/Beds" },
        { icon: "💧", label: "Regular Watering" },
        { icon: "🌞", label: "Provide Sunlight" },
        { icon: "🦠", label: "Disease Monitoring" },
      ],
    },
    {
      stage: "Transplanting",
      description: "At 4–6 weeks after sowing",
      steps: [
        { icon: "🌱", label: "Harden Seedlings" },
        { icon: "🧑‍🌾", label: "Transplant to Field" },
        { icon: "🌧️", label: "Water After Transplant" },
      ],
    },
    {
      stage: "Vegetative",
      description: "2–5 weeks after transplanting",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
      ],
    },
    {
      stage: "Head Formation",
      description: "6–10 weeks after transplanting",
      steps: [
        { icon: "🥦", label: "Monitor Head Development" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🧪", label: "Apply Micronutrients" },
      ],
    },
    {
      stage: "Harvest",
      description: "10–14 weeks after transplanting",
      steps: [
        { icon: "🧺", label: "Harvest Mature Heads" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Peas: [
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
      description: "2–5 weeks after sowing",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🪢", label: "Provide Trellis/Support" },
      ],
    },
    {
      stage: "Flowering",
      description: "5–7 weeks after sowing",
      steps: [
        { icon: "🌸", label: "Monitor Flowering" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🐝", label: "Encourage Pollination" },
      ],
    },
    {
      stage: "Pod Formation",
      description: "7–10 weeks after sowing",
      steps: [
        { icon: "🌱", label: "Monitor Pod Development" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🦟", label: "Pest & Disease Control" },
      ],
    },
    {
      stage: "Harvest",
      description: "10–14 weeks after sowing",
      steps: [
        { icon: "🧺", label: "Harvest Mature Pods" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Lettuce: [
    {
      stage: "Land Preparation",
      description: "1–2 weeks before sowing",
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
        { icon: "💧", label: "Light Irrigation if Needed" },
        { icon: "🦟", label: "Check for Pests" },
      ],
    },
    {
      stage: "Vegetative",
      description: "2–5 weeks after sowing",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🦟", label: "Pest & Disease Monitoring" },
      ],
    },
    {
      stage: "Head Formation",
      description: "5–7 weeks after sowing",
      steps: [
        { icon: "🥬", label: "Monitor Head Development" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🧪", label: "Apply Micronutrients" },
      ],
    },
    {
      stage: "Harvest",
      description: "7–10 weeks after sowing",
      steps: [
        { icon: "🧺", label: "Harvest Mature Lettuce" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
  Beans: [
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
        { icon: "💧", label: "Light Irrigation if Needed" },
        { icon: "🦟", label: "Check for Pests" },
      ],
    },
    {
      stage: "Vegetative",
      description: "2–4 weeks after sowing",
      steps: [
        { icon: "🌿", label: "Fertilizer Application" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🧹", label: "Weed Control" },
        { icon: "🪢", label: "Provide Trellis/Support" },
      ],
    },
    {
      stage: "Flowering",
      description: "4–6 weeks after sowing",
      steps: [
        { icon: "🌸", label: "Monitor Flowering" },
        { icon: "💧", label: "Maintain Moisture" },
        { icon: "🐝", label: "Encourage Pollination" },
      ],
    },
    {
      stage: "Pod Formation",
      description: "6–8 weeks after sowing",
      steps: [
        { icon: "🌱", label: "Monitor Pod Development" },
        { icon: "💧", label: "Regular Irrigation" },
        { icon: "🦟", label: "Pest & Disease Control" },
      ],
    },
    {
      stage: "Harvest",
      description: "8–12 weeks after sowing",
      steps: [
        { icon: "🧺", label: "Harvest Mature Pods" },
        { icon: "📦", label: "Sort and Pack" },
        { icon: "🧼", label: "Post-Harvest Handling" },
      ],
    },
  ],
};
