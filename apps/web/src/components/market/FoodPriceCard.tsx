import Image from "next/image";
import Link from "next/link";

interface FoodPriceCardProps {
  title: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

export default function FoodPriceCard({
  title,
  price,
  imageSrc,
  imageAlt,
}: FoodPriceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-medium text-green-700">{title}</h2>
          <div className="flex justify-between text-sm mt-1">
            <span>Harga</span>
            <span>{price}</span>
          </div>
        </div>
      </div>

    <Link href={`/market/${title.toLowerCase().replace(/ /g, "-")}`}>
      <button className="w-full bg-green-700 text-white py-1.5 rounded-md mt-4 text-center text-sm font-medium">
        Keterangan
      </button>
    </Link>
    </div>
  );
}
