import React from "react";
import FieldCareCard from "./FieldCareCard";

type CareStep = {
  icon: string;
  label: string;
};

type CareStage = {
  stage: string;
  description: string;
  steps: CareStep[];
};

type FieldCareTabProps = {
  careData: CareStage[];
};

export default function FieldCareTab({ careData }: FieldCareTabProps) {
  return (
    <div className="pb-20">
      {careData.length === 0 && (
        <div className="text-gray-400 text-center py-8 px-6">
          No care data for this crop.
        </div>
      )}
      {careData.map((stage) => (
        <div key={stage.stage} className="pb-2 bg-gray-100">
          <div
            className="bg-greenish px-6 py-4"
          >
            <h2 className="font-medium text-xl text-white">
              {stage.stage}
            </h2>
          </div>
          <div
            className="bg-gray-100 px-6 py-4"
          >
            <p className="text-sm mt-1 text-greenish">
              {stage.description}
            </p>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              {stage.steps.map((step, idx) => (
                <FieldCareCard
                  key={idx}
                  icon={step.icon}
                  label={step.label}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 