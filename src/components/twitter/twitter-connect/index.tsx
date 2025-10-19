import React from "react";
import { API_X_CALLBACK } from "@/api/config";

import { Button } from "@/components/button";

type Props = {
  name?: string;
  disabled?: boolean;
  disabledText?: string;
  onConnect: () => void;
};

export function TwitterConnect({
  name,
  disabled,
  disabledText,
  onConnect,
}: Props) {

  const authenticateWithTwitter = () => {
    const state = encodeURIComponent(window.location.href);
    // console.log('q1', `${API_X_CALLBACK}?state=${state}`, onConnect);
    window.location.href = `${API_X_CALLBACK}?state=${state}`;
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
          disabledText={disabledText}
        >
          Connect X
        </Button>
      )}
    </>
  );
}
