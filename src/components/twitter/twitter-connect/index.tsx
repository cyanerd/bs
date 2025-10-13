import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { API_HOST } from "@/api/config";

import { Button } from "@/components/button";

type Props = {
  name?: string;
  onConnect: () => void;
  disabled?: boolean;
};

export function TwitterConnect({ name, disabled, onConnect }: Props) {
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);

  //   console.log(urlParams, Cookies.get("access_token"), Cookies.get("refresh_token"));

  //   const accessToken = urlParams.get("access_token");
  //   const refreshToken = urlParams.get("refresh_token");

  //   if (accessToken && refreshToken) {
  //     Cookies.set("access_token", accessToken, { expires: 1 });
  //     Cookies.set("refresh_token", refreshToken, { expires: 7 });

  //     onConnect();

  //     window.history.replaceState({}, document.title, window.location.pathname);
  //   }
  // }, []);

  const authenticateWithTwitter = () => {
    const state = encodeURIComponent(window.location.href);
    window.location.href = API_HOST + `/auth/twitter?state=${state}`;
  };

  return (
    <>
      {name ? (
        <Button $background="var(--primary-color)">@{name}</Button>
      ) : (
        <Button
          $background="var(--primary-color)"
          onClick={authenticateWithTwitter}
          disabled={disabled}
        >
          Connect X
        </Button>
      )}
    </>
  );
}
