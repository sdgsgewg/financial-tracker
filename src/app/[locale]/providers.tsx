"use client";

import { ThemeProvider } from "next-themes";
import { Profile } from "../../types/profile";
import { User } from "@supabase/supabase-js";
import { AuthProvider, QueryProvider, ToastProvider } from "@/providers";
import { LightboxProvider } from "@/context/LightboxContext";

interface ProvidersProps {
  children: React.ReactNode;
  initialUser: User | null;
  initialProfile: Profile | null;
}

export default function Providers({
  children,
  initialUser,
  initialProfile,
}: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange // optional, but recommended to prevent color theme transition when changing pages
    >
      <ToastProvider>
        <AuthProvider initialUser={initialUser} initialProfile={initialProfile}>
          <QueryProvider>
            <LightboxProvider>{children}</LightboxProvider>
          </QueryProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
