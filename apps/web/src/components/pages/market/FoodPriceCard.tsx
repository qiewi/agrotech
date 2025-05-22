import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

export default function FoodPriceGridCard({ title, price, imageSrc, imageAlt }: Props) {
  return (
    <Link href={`/market/${title.toLowerCase().replace(/ /g, "-")}`}>
      <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="180px"
            priority
          />
        </div>
        <div className="p-2">
          <div className="font-medium text-sm truncate">{title}</div>
          <div className="font-bold text-base text-green-800">{price}</div>
        </div>
      </div>
    </Link>
  );
}
