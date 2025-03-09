"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Navbar() {
  const { isAuthenticated, user } = useKindeAuth();

  return (
    <nav className="p-4 border-b flex justify-between items-center">
      <Link href="/" className="text-lg font-bold">TipJar</Link>
      <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <Link href="/profile">
              <Button variant="outline">Profile</Button>
            </Link>
            <LogoutLink>
              <Button>Logout</Button>
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink>
              <Button>Sign In</Button>
            </LoginLink>
            <RegisterLink>
              <Button variant="outline">Sign Up</Button>
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
}
