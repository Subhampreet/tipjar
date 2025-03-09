"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export function AuthProvider({ children }) {
  return <KindeProvider>{children}</KindeProvider>;
}
