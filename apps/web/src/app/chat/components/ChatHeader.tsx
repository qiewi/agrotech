import { Leaf } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="p-4 bg-white flex items-center justify-center gap-2 border-b border-gray-100 w-full">
      <Leaf className="h-8 w-8 text-green-600 -rotate-45" />
      <span className="text-xl font-bold text-green-700 tracking-tight">agrotech</span>
    </header>
  );
}
