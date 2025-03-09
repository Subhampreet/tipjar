"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfilePage() {
  const { isAuthenticated, user } = useKindeAuth();

  if (!isAuthenticated) {
    return <p className="text-center mt-10">Please log in to view your profile.</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {user.given_name || "Not set"}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <Link href="/profile/edit">
        <Button className="mt-4">Edit Profile</Button>
      </Link>
    </div>
  );
}
