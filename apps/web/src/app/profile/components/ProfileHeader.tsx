import { useState } from "react";
import { Pencil } from "lucide-react";
import { ProfileIcon } from "@/components/icons/VuesaxIcons";

export default function ProfileHeader() {
  const [name, setName] = useState('Nama');

  return (
    <div className="text-center mb-4">
      <div className="rounded-xl flex items-center justify-center h-32 mb-2">
        <ProfileIcon className="w-16 h-16 text-greenish" />
      </div>
      <div className="flex items-center justify-center gap-2 mb-1">
          <input
            type="text"
            className="font-bold text-xl text-center bg-transparent border-b border-gray-300 focus:outline-none focus:border-greenish w-fit"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Pencil className="w-4 h-4 text-gray-500" />
        </div>
      <div className="flex items-center justify-center gap-2 text-sm bg-gray-100 px-3 py-1.5 rounded-full w-fit mx-auto mt-2">
        <span className="text-black text-xs">📍</span>
        <span className="font-medium text-gray-700">Canggu, Bali</span>
      </div>
    </div>
  );
}
