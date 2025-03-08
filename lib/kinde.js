import { KindeAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const kindeAuth = new KindeAuth({
  issuerBaseURL: process.env.KINDE_ISSUER_URL,
  clientId: process.env.KINDE_CLIENT_ID,
  clientSecret: process.env.KINDE_CLIENT_SECRET,
  redirectUri: process.env.KINDE_REDIRECT_URL,
  postLogoutRedirectUri: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});
