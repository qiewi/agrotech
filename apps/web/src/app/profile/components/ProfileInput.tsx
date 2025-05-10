import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ProfileInput() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password123");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="space-y-5">
      <div>
        <label className="text-greenish text-sm font-bold mb-1 block">Email</label>
        <input
          type="email"
          className="w-full bg-gray-100 p-3 pl-4 pr-4 rounded-lg text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-greenish text-sm font-bold mb-1">Password</label>
        <div className="flex items-center bg-gray-100 rounded-lg pr-4 pl-4">
          <input
            type={passwordVisible ? "text" : "password"}
            className="w-full bg-transparent p-3 pr-2 text-sm focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="w-4 h-4 text-gray-500 cursor-pointer"
          >
            {passwordVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </div>
        </div>
      </div>
    </div>
  );
}
