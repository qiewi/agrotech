// components/market/CustomDatePicker.tsx
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type Props = {
  availableDates: string[];
  selected: string;
  onSelect: (date: string) => void;
};

export default function CustomDatePicker({
  availableDates,
  selected,
  onSelect,
}: Props) {
  // Konversi ke Date object
  const available = availableDates.map((d) => new Date(d));
  const selectedDate = selected ? new Date(selected) : undefined;

  // Hanya enable tanggal yang ada di availableDates
  const modifiers = {
    available: available,
  };

  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={(date) => {
        if (date) {
          const iso = date.toISOString().slice(0, 10);
          if (availableDates.includes(iso)) {
            onSelect(iso);
          }
        }
      }}
      modifiers={modifiers}
      modifiersClassNames={{
        available: "bg-green-100 text-green-800 font-bold",
      }}
      disabled={(date) => !availableDates.includes(date.toISOString().slice(0, 10))}
      showOutsideDays={false}
      fromDate={available[0]}
      toDate={available[available.length - 1]}
      className="mx-auto"
    />
  );
}
