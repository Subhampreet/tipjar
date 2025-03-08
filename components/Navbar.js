"use client";

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUser(data.user);

      // Call API to sync user with Supabase
      if (data.user) {
        await fetch("/api/auth/callback");
      }
    }
    fetchUser();
  }, []);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">TipJar</h1>
      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-sm">{user.email}</span>
          <LogoutLink className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Logout</LogoutLink>
        </div>
      ) : (
        <LoginLink className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Login</LoginLink>
      )}
    </nav>
  );
}
