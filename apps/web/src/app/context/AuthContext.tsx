// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

type User = {
  user_id: number;
  name: string;
  email: string;
  phone_number?: string;
  profile_picture_url?: string;
  join_date?: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);

  // Saat setUser dipanggil, simpan ke cookies
  const setUser = (user: User | null) => {
    setUserState(user);
    if (user) {
      Cookies.set("user_id", String(user.user_id), { expires: 7 });
      Cookies.set("user_name", user.name, { expires: 7 });
      Cookies.set("user_email", user.email, { expires: 7 });
      Cookies.set("user_phone_number", user.phone_number || "", { expires: 7 });
      Cookies.set("user_profile_picture_url", user.profile_picture_url || "", {
        expires: 7,
      });
      Cookies.set("user_join_date", user.join_date || "", { expires: 7 });
      // Tambahkan field lain jika perlu
    } else {
      Cookies.remove("user_id");
      Cookies.remove("user_name");
      Cookies.remove("user_email");
      Cookies.remove("user_phone_number");
      Cookies.remove("user_profile_picture_url");
      Cookies.remove("user_join_date");
      // Hapus cookies lain jika perlu
    }
  };

  // Saat mount, cek cookies
  useEffect(() => {
    const user_id = Cookies.get("user_id");
    const name = Cookies.get("user_name");
    const email = Cookies.get("user_email");
    if (user_id && name && email) {
      setUserState({
        user_id: Number(user_id),
        name,
        email,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
