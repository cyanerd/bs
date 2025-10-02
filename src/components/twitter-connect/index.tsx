import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "../button";
import { apiDomain } from "@/api/config";

type Props = {
  name?: string;
  onConnect?: () => void;
  disabled?: boolean;
};

export function TwitterConnect({ name, disabled, onConnect }: Props) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");

    if (accessToken && refreshToken) {
      Cookies.set("access_token", accessToken, { expires: 1 });
      Cookies.set("refresh_token", refreshToken, { expires: 7 });

      onConnect?.();

      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const authenticateWithTwitter = () => {
    const state = encodeURIComponent(window.location.href);
    window.location.href = apiDomain + `/auth/twitter?state=${state}`;
  };

  return (
    <div className="twitter-card">
      {name ? (
        <Button>@{name}</Button>
      ) : (
        <Button onClick={authenticateWithTwitter} disabled={disabled}>
          Connect X
        </Button>
      )}
    </div>
  );
}
