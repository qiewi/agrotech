import Image from "next/image";
import { KATEGORI_LIST } from "@/lib/data/data-kategori";

interface Props {
  selected: string;
  onSelect: (value: string) => void;
}

export default function KategoriCircleFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex gap-5 justify-center py-2">
      {KATEGORI_LIST.map((kat) => (
        <button
          key={kat.value}
          onClick={() => onSelect(kat.value)}
          className={`flex flex-col items-center focus:outline-none`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition
              ${
                selected === kat.value
                  ? "border-green-600 bg-green-50"
                  : "border-gray-200 bg-white"
              }
            `}
          >
            <Image
              src={kat.icon}
              alt={kat.label}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span
            className={`mt-2 text-xs font-medium ${
              selected === kat.value ? "text-green-700" : "text-gray-500"
            }`}
          >
            {kat.label}
          </span>
        </button>
      ))}
    </div>
  );
}
