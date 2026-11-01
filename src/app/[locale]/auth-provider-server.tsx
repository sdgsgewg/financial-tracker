import { Suspense } from "react";
import Providers from "./providers";
import { getCurrentAuth } from "@/lib/auth/current-auth";

async function AuthProviderContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, profile } = await getCurrentAuth();

  return (
    <Providers initialUser={user} initialProfile={profile}>
      {children}
    </Providers>
  );
}

export default function AuthProviderServer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading application...</div>}>
      <AuthProviderContent>{children}</AuthProviderContent>
    </Suspense>
  );
}
