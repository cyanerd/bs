import React, { useEffect, useState } from "react";
import { HintRoot, IconButton, Tooltip } from "./styles";

export const Hint = ({ children }: React.PropsWithChildren<{}>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  // We need this effect to detect whether the user's device uses a coarse pointer (like touch screens)
  // or a fine pointer (like a mouse). This allows us to adjust the Hint's interaction logic: on coarse
  // (touch) devices, we toggle the hint on click, while on fine pointer (mouse), we show it on hover.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia && window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarsePointer(!!(mql && mql.matches));
    update();
    if (mql) {
      if (typeof mql.addEventListener === "function") {
        mql.addEventListener("change", update);
        return () => mql.removeEventListener("change", update);
      }
      // Safari fallback
      if (typeof (mql as any).addListener === "function") {
        (mql as any).addListener(update);
        return () => (mql as any).removeListener(update);
      }
    }
  }, []);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggle = () => setIsVisible((v) => !v);

  return (
    <HintRoot onMouseLeave={!isCoarsePointer ? hide : undefined}>
      <IconButton
        type="button"
        aria-label="Hint"
        onMouseEnter={!isCoarsePointer ? show : undefined}
        onClick={isCoarsePointer ? toggle : undefined}
        onFocus={!isCoarsePointer ? show : undefined}
        onBlur={!isCoarsePointer ? hide : undefined}
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
