"use client";

import { useEffect, useState } from "react";

export default function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUser(data.user);
    }
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>Logged in as {user.email}</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
