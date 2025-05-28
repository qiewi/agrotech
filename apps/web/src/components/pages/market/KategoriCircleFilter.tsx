import Image from "next/image";
import { KATEGORI_LIST } from "@/lib/data/data-kategori";

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

export default function KategoriCircleFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex gap-6 overflow-x-auto no-scrollbar py-2">
      {KATEGORI_LIST.map((kat) => (
        <button
          key={kat.value}
          onClick={() => onSelect(kat.value)}
          className="flex flex-col items-center focus:outline-none min-w-[72px]"
        >
          <div
            className={`w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all
              ${
                selected === kat.value
                  ? "bg-[#15803D]"
                  : "bg-gray-100"
              }
            `}
          >
            <Image
              src={kat.icon}
              alt={kat.label}
              width={40}
              height={40}
              className={`object-contain`}
            />
          </div>
          <span
            className={`mt-2 text-sm ${
              selected === kat.value ? "text-[#15803D] font-medium" : "text-gray-500"
            }`}
          >
            {kat.label}
          </span>
        </button>
      ))}
    </div>
  );
}
