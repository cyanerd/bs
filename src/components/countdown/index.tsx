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
        display: "grid",
        gridTemplateColumns: "repeat(3, 40px)",
        gap: "2rem",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "2rem" }}>{hoursStr}</span>
        <span>Hrs</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "2rem" }}>{minutesStr}</span>
        <span>Min</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "2rem" }}>{secondsStr}</span>
        <span>Sec</span>
      </div>
    </div>
  );
};
