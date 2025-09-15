import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/api/:path*",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth(); 
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/api/:path*",
  ],
};
