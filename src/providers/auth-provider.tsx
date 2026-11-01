"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "../lib/supabase/client";
import { Profile } from "../types/profile";
import { useRouter } from "next/navigation";
import { canManageContent, isAdmin, isUser } from "../lib/auth/roles";

interface AuthContextType {
  user: User | null;
  profile: Profile | null;

  isGuest: boolean;
  isAuthenticated: boolean;

  isUser: boolean;
  isContentManager: boolean;
  isAdmin: boolean;

  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
  initialUser: User | null;
  initialProfile: Profile | null;
}

export function AuthProvider({
  children,
  initialUser,
  initialProfile,
}: AuthProviderProps) {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();

  const [user, setUser] = useState<User | null>(initialUser);
  const [profile, setProfile] = useState<Profile | null>(initialProfile);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      const currentUser = session?.user ?? null;

      setUser(currentUser);

      if (!currentUser) {
        setProfile(null);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .single();

      setProfile(data);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isGuest: !user,
        isAuthenticated: !!user,
        isUser: isUser(profile),
        isContentManager: canManageContent(profile),
        isAdmin: isAdmin(profile),
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
