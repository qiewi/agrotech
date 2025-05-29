import React from "react";
import FertilizationCalculator from "@/components/pages/field/fertilization-calculator";

type FertilizationData = {
  stage: string;
  amount: string;
  note: string;
};

type FieldFertilizationTabProps = {
  fertData: FertilizationData[];
  onClose: () => void;
};

export default function FieldFertilizationTab({ fertData, onClose }: FieldFertilizationTabProps) {
  return (
    <div className="py-4">
      <div className="bg-white rounded-xl">
        <FertilizationCalculator onClose={onClose} />
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mt-6">
        <h3 className="font-medium mb-3">
          Recommended Fertilization Schedule
        </h3>
        <div className="space-y-3">
          {fertData.length === 0 && (
            <div className="text-gray-400 text-center py-8">
              No fertilization data for this crop.
            </div>
          )}
          {fertData.map((item, idx) => (
            <div key={idx} className="bg-white p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{item.stage}</span>
                <span className="text-green-700">{item.amount}</span>
              </div>
              <p className="text-xs text-gray-500">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 