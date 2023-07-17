"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getProviders, signIn, signOut } from "next-auth/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";
type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};
type Providers = Record<string, Provider>;

const LoginBtn = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  const { data: session, status } = useSession();
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  if (status === "authenticated") {
    return (
      <Link href="/dashboard">
        <Button variant="outline">DashBoard</Button>
      </Link>
    );
  }

  if (providers) {
    return (
      <>
        {Object.values(providers).map((provider: Provider) => (
          <div key={provider.name}>
            <Button variant="outline" onClick={() => signIn(provider?.id)}>
              {provider.name === "GitHub" ? (
                <GitHubLogoIcon className="mr-2" />
              ) : (
                ""
              )}
              Login
            </Button>
          </div>
        ))}
      </>
    );
  }
  return (
    <Button variant="outline" className="cursor-not-allowed" disabled>
      Loading
    </Button>
  );
};

export default LoginBtn;
