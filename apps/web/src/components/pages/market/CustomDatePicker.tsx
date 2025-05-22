// components/pages/market/CustomDatePicker.tsx
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type Props = {
  availableDates: string[];
  selected: string;
  onSelect: (date: string) => void;
};

export default function CustomDatePicker({ availableDates, selected, onSelect }: Props) {
  const available = availableDates.map((d) => new Date(d));
  const selectedDate = selected ? new Date(selected) : undefined;

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
      disabled={(date) => !availableDates.includes(date.toISOString().slice(0, 10))}
      fromDate={available[0]}
      toDate={available[available.length - 1]}
      showOutsideDays={false}
      className="mx-auto"
    />
  );
}
