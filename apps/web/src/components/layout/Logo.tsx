import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mt-10 mb-12 gap-3">
      <Image src="/logo/agrotech.svg" alt="Agrotech Logo" width={32} height={32} className="w-8 h-8" />
      <span className="text-xl font-semibold text-gray-800"><span className="text-greenish">Agro</span>tech</span>
    </div>
  );
} 