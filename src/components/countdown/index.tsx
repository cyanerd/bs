import React from "react";

type Props = {
  dateTarget?: number;
};

export const Countdown: React.FC<Props> = ({ dateTarget = 1760475600000 }) => {
  const [remainingMs, setRemainingMs] = React.useState<number>(
    Math.max(0, dateTarget - Date.now()),
  );

  React.useEffect(() => {
    setRemainingMs(Math.max(0, dateTarget - Date.now()));

    const id = window.setInterval(() => {
      const diff = dateTarget - Date.now();
      if (diff <= 0) {
        setRemainingMs(0);
        window.clearInterval(id);
      } else {
        setRemainingMs(diff);
      }
    }, 1000);

    return () => window.clearInterval(id);
  }, [dateTarget]);

  const totalSeconds = Math.floor(remainingMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad2 = (n: number) => String(n).padStart(2, "0");
  const hoursStr = pad2(hours);
  const minutesStr = pad2(minutes);
  const secondsStr = pad2(seconds);

  return (
    <div
      id="timer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        margin: "0 auto",
        border: "1px solid #333",
        padding: "0.75rem 1.5rem",
        borderRadius: "1rem",
      }}
    >
      <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{hoursStr}</span>
      <span style={{ fontSize: "0.9rem", color: "#ccc" }}>Hrs</span>

      <span style={{ fontSize: "1.2rem", color: "#666", margin: "0 0.25rem" }}>:</span>

      <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{minutesStr}</span>
      <span style={{ fontSize: "0.9rem", color: "#ccc" }}>Min</span>

      <span style={{ fontSize: "1.2rem", color: "#666", margin: "0 0.25rem" }}>:</span>

      <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{secondsStr}</span>
      <span style={{ fontSize: "0.9rem", color: "#ccc" }}>Sec</span>
    </div>
  );
};
