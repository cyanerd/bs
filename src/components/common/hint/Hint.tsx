import React, { useState } from "react";
import { HintRoot, IconButton, Tooltip } from "./styles";

export const Hint = ({ children }: React.PropsWithChildren<{}>) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggle = () => setIsVisible((v) => !v);

  return (
    <HintRoot onMouseLeave={hide}>
      <IconButton
        type="button"
        aria-label="Hint"
        onMouseEnter={show}
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      </IconButton>
      <Tooltip $visible={isVisible}>{children}</Tooltip>
    </HintRoot>
  );
};
