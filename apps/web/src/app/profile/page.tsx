"use client";

import { useEffect, useState } from "react";
import { Leaf, MapPin, Lock } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { ro } from "react-day-picker/locale";
import Header from "@/components/layout/Header";

type Field = {
  field_id: number;
  user_id: number;
  field_name: string;
  location: string;
  crop_type: string;
  area_size: number;
  date_created: string;
};

export default function ProfilePage() {
  const { user, setUser } = useAuth();
  const [fields, setFields] = useState<Field[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      fetch(`/api/fields?user_id=${user.user_id}`)
        .then((res) => res.json())
        .then((data) => {
          setFields(data.fields || []);
          setLoading(false);
        });
    } else {
      router.push("/");
    }
  }, [user]);

  const handleChangePassword = () => {
    alert("Change password clicked");
  };
  const handleLogout = () => {
    setUser(null);
    router.push("/");
  };

  if (!user) {
    return null;
  }

  const totalFields = fields.length;
  const totalArea = fields.reduce((sum, f) => sum + (f.area_size || 0), 0);
  const joinDate = user.join_date
    ? new Date(user.join_date).toLocaleString("default", {
        month: "short",
        year: "numeric",
      })
    : "-";

  return (
    <div className="flex flex-col w-full pb-20 px-2 bg-white">
      <Header />

      {/* Profile Content */}
      <main className="flex-1 px-4 pb-16 mt-2">
        <div className="bg-gray-50 rounded-xl p-4 shadow-sm max-w-md mx-auto">
          {/* Profile Picture */}
          <div className="flex justify-center mb-2">
            <img
              src={"/bawang-merah.png"}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>

          {/* Email */}
          <div className="mb-4 text-center">
            <p className="text-green-700 font-medium text-xs mb-1">Email</p>
            <p className="text-gray-800 font-medium text-sm break-all">{user.email}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <p className="text-xl font-bold">{loading ? "-" : totalFields}</p>
              <p className="text-gray-500 text-xs">Fields</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">{loading ? "-" : totalArea}</p>
              <p className="text-gray-500 text-xs">Hectares</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">{joinDate}</p>
              <p className="text-gray-500 text-xs">Date Joined</p>
            </div>
          </div>

          {/* Change Password Button */}
          <button
            onClick={handleChangePassword}
            className="w-full flex items-center justify-center bg-green-700 text-white py-3 rounded-lg text-sm mt-2"
          >
            <Lock className="h-4 w-4 mr-2" />
            <span className="font-medium">Change Password</span>
          </button>
        </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-100 text-red-600 py-3 rounded-lg font-medium text-sm mt-5 mb-5"
          >
            Log Out
          </button>
      </main>
    </div>
  );
}
