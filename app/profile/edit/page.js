"use client";

import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function EditProfile() {
  const { user } = useKindeAuth();
  const router = useRouter();
  const [profile, setProfile] = useState({ name: "", bio: "", website: "" });
  const [loading, setLoading] = useState(true);

  // Fetch existing profile data
  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;

      const { data, error } = await supabase
        .from("users")
        .select("name, bio, website")
        .eq("kinde_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      setProfile({
        name: data.name || "",
        bio: data.bio || "",
        website: data.website || "",
      });
      setLoading(false);
    }

    fetchProfile();
  }, [user]);

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    if (!user) return;

    const { error } = await supabase
      .from("users")
      .update(profile)
      .eq("kinde_id", user.id);

    if (error) {
      console.error("Error updating profile:", error);
      return;
    }
    router.push("/profile"); // Redirect after save
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="mb-2"
          />
          <Input
            placeholder="Bio"
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="mb-2"
          />
          <Input
            placeholder="Website"
            value={profile.website}
            onChange={(e) =>
              setProfile({ ...profile, website: e.target.value })
            }
            className="mb-2"
          />
          <Button type="submit">Save</Button>
        </form>
      )}
    </div>
  );
}
