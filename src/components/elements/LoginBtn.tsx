"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getProviders, signIn } from "next-auth/react";

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
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  if (providers) {
    return (
      <>
        {Object.values(providers).map((provider: Provider) => (
          <div key={provider.name}>
            <Button variant="outline" onClick={() => signIn(provider?.id)}>
              {" "}
              Login{" "}
            </Button>
          </div>
        ))}
      </>
    );
  }
  return <>...</>
};

export default LoginBtn;
