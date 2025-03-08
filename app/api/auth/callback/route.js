import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    console.log("Fetching user from Kinde...");
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log("User fetched:", user);

    if (!user || !user.email) {
      return Response.json({ error: "User not found" }, { status: 401 });
    }

    console.log("Inserting user into Supabase...");
    const { data, error } = await supabase
      .from("users")
      .upsert(
        [
          {
            email: user.email,
            name: user.given_name,
            kinde_id: user.id, // Store Kinde ID separately
          },
        ],
        { onConflict: ["email"] }
      );

    if (error) {
      console.error("Supabase error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.log("User synced successfully:", data);
    return Response.json({ message: "User synced successfully", data });
  } catch (err) {
    console.error("Unexpected error:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
