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


type Stage = {
  stage: string;
  description: string;
  steps: { icon: string; label: string }[];
};

// Mapping hari ke index stage untuk setiap cropType
const stageRanges: Record<string, Array<{ start: number; end: number; index: number }>> = {
  Tomato: [
    { start: 1, end: 21, index: 0 },    // Pre-Nursery (3 minggu)
    { start: 22, end: 42, index: 1 },   // Nursery (3 minggu)
    { start: 43, end: 49, index: 2 },   // Transplanting (1 minggu)
    { start: 50, end: 77, index: 3 },   // Vegetative (4 minggu)
    { start: 78, end: 98, index: 4 },   // Flowering (3 minggu)
    { start: 99, end: 112, index: 5 },  // Fruiting (2 minggu)
    { start: 113, end: 140, index: 6 }, // Harvest (4 minggu)
  ],
  Corn: [
    { start: 1, end: 14, index: 0 },    // Land Preparation (2 minggu)
    { start: 15, end: 21, index: 1 },   // Sowing (1 minggu)
    { start: 22, end: 35, index: 2 },   // Germination (2 minggu)
    { start: 36, end: 63, index: 3 },   // Vegetative (4 minggu)
    { start: 64, end: 77, index: 4 },   // Tasseling & Silking (2 minggu)
    { start: 78, end: 105, index: 5 },  // Grain Filling (4 minggu)
    { start: 106, end: 119, index: 6 }, // Harvest (2 minggu)
  ],
  Eggplant: [
    { start: 1, end: 21, index: 0 },
    { start: 22, end: 42, index: 1 },
    { start: 43, end: 49, index: 2 },
    { start: 50, end: 84, index: 3 },
    { start: 85, end: 112, index: 4 },
    { start: 113, end: 140, index: 5 },
    { start: 141, end: 168, index: 6 },
  ],
  Potato: [
    { start: 1, end: 14, index: 0 },
    { start: 15, end: 21, index: 1 },
    { start: 22, end: 35, index: 2 },
    { start: 36, end: 63, index: 3 },
    { start: 64, end: 77, index: 4 },
    { start: 78, end: 112, index: 5 },
    { start: 113, end: 140, index: 6 },
  ],
  Chili: [
    { start: 1, end: 21, index: 0 },
    { start: 22, end: 42, index: 1 },
    { start: 43, end: 49, index: 2 },
    { start: 50, end: 84, index: 3 },
    { start: 85, end: 112, index: 4 },
    { start: 113, end: 140, index: 5 },
    { start: 141, end: 168, index: 6 },
  ],
  Bellpepper: [
    { start: 1, end: 21, index: 0 },
    { start: 22, end: 42, index: 1 },
    { start: 43, end: 49, index: 2 },
    { start: 50, end: 84, index: 3 },
    { start: 85, end: 112, index: 4 },
    { start: 113, end: 140, index: 5 },
    { start: 141, end: 168, index: 6 },
  ],
  Cucumber: [
    { start: 1, end: 14, index: 0 },
    { start: 15, end: 21, index: 1 },
    { start: 22, end: 35, index: 2 },
    { start: 36, end: 63, index: 3 },
    { start: 64, end: 77, index: 4 },
    { start: 78, end: 91, index: 5 },
    { start: 92, end: 105, index: 6 },
  ],
  Ginger: [
    { start: 1, end: 21, index: 0 },
    { start: 22, end: 28, index: 1 },
    { start: 29, end: 63, index: 2 },
    { start: 64, end: 150, index: 3 },
    { start: 151, end: 240, index: 4 },
    { start: 241, end: 300, index: 5 },
  ],
  Broccoli: [
    { start: 1, end: 42, index: 0 },
    { start: 43, end: 84, index: 1 },
    { start: 85, end: 91, index: 2 },
    { start: 92, end: 126, index: 3 },
    { start: 127, end: 168, index: 4 },
    { start: 169, end: 196, index: 5 },
  ],
  Peas: [
    { start: 1, end: 14, index: 0 },
    { start: 15, end: 21, index: 1 },
    { start: 22, end: 35, index: 2 },
    { start: 36, end: 63, index: 3 },
    { start: 64, end: 77, index: 4 },
    { start: 78, end: 105, index: 5 },
    { start: 106, end: 140, index: 6 },
  ],
  Lettuce: [
    { start: 1, end: 14, index: 0 },
    { start: 15, end: 21, index: 1 },
    { start: 22, end: 35, index: 2 },
    { start: 36, end: 63, index: 3 },
    { start: 64, end: 77, index: 4 },
    { start: 78, end: 105, index: 5 },
  ],
  Beans: [
    { start: 1, end: 14, index: 0 },
    { start: 15, end: 21, index: 1 },
    { start: 22, end: 35, index: 2 },
    { start: 36, end: 63, index: 3 },
    { start: 64, end: 77, index: 4 },
    { start: 78, end: 91, index: 5 },
    { start: 92, end: 119, index: 6 },
  ],
};

export function getStage(
  cropType: string,
  day: number
): Stage | null {
  const stages = careStages[cropType];
  if (!stages) return null;

  const ranges = stageRanges[cropType];
  if (!ranges) return stages[0]; // fallback ke stage pertama

  const found = ranges.find((r) => day >= r.start && day <= r.end);
  if (found) return stages[found.index];

  // Jika hari melebihi semua range, kembalikan stage terakhir
  return stages[stages.length - 1];
}