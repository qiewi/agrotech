import React from "react";

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
    <div className="py-4">
      {careData.length === 0 && (
        <div className="text-gray-400 text-center py-8">
          No care data for this crop.
        </div>
      )}
      {careData.map((stage) => (
        <div key={stage.stage} className="mb-6">
          <div
            className={`${
              stage.stage === "Pre Nursery"
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-800"
            } p-4 rounded-t-xl`}
          >
            <h2 className="font-medium">{stage.stage}</h2>
          </div>
          <div className="bg-gray-50 p-4 rounded-b-xl">
            <p className="text-sm text-gray-600 mb-4">
              {stage.description}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stage.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-xl text-center"
                >
                  <div className="bg-gray-100 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                    <span>{step.icon}</span>
                  </div>
                  <p className="text-xs text-gray-600">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 