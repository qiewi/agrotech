import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type FieldCareCardProps = {
  icon: string;
  label: string;
};

export default function FieldCareCard({ icon, label }: FieldCareCardProps) {
  return (
    <Card className="p-0 py-3 min-w-[120px] hover:bg-gray-50 transition-colors duration-200">
      <CardContent className="flex flex-col items-center gap-1.5 px-3">
        <span className="text-5xl text-greenish">{icon}</span>
        <p className="text-sm text-gray-600 text-center leading-tight">{label}</p>
      </CardContent>
    </Card>
  );
} 