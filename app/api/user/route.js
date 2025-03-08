import { getUserSession } from "@/lib/getUser";

export async function GET() {
  const user = await getUserSession();
  return Response.json({ user });
}
