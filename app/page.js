import Navbar from "@/components/Navbar";
import { LoginLink, LogoutLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();

  return (
    <div>
      {/* <h1>Welcome to TipJar</h1>
      {user ? (
        <div>
          <p>Logged in as {user.email}</p>
          <LogoutLink>Logout</LogoutLink>
        </div>
      ) : (
        <div>
          <LoginLink>Login</LoginLink>
          <RegisterLink>Register</RegisterLink>
        </div>
      )} */}

      <Navbar />
    </div>
  );
}
