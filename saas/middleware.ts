import { clerkMiddleware, ClerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// Create a custom middleware that extends Clerk's functionality
const customMiddleware: ClerkMiddleware = (auth, req: NextRequest) => {
  // Handle users who aren't authenticated
  if (!auth.userId && !isPublicRoute(req.nextUrl.pathname)) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // If user is logged in and trying to access sign-up page
  if (auth.userId && req.nextUrl.pathname === "/sign-up") {
    const dashboard = new URL("/dashboard", req.url);
    return NextResponse.redirect(dashboard);
  }

  // Allow users to visit all other pages
  return NextResponse.next();
};

// Public routes that don't require authentication
function isPublicRoute(path: string): boolean {
  const publicPaths = ["/", "/sign-in", "/sign-up"];
  const isApiRoute = path.startsWith("/api");
  return publicPaths.includes(path) || isApiRoute;
}

export default clerkMiddleware(customMiddleware);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};