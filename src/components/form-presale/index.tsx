import React, { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
// import SolanaIcon from "@/components/icons/solana.svg";

export const FormPresale = () => {
  const [price, setPrice] = useState(1000);

  return (
    <form style={{ textAlign: "center" }}>
      <h3>$STRAND Presale Live!</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Your price</span>
          <span style={{ fontSize: "1.25rem" }}>0.00023 SOL</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Amount Sold</span>
          <span style={{ fontSize: "1.25rem" }}>4000 SOL</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Backers</span>
          <span style={{ fontSize: "1.25rem" }}>255</span>
        </div>
      </div>

      <h4>Time Remaining</h4>
      <div
        id="timer"
        style={{
          display: "flex",
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
          <span style={{ fontSize: "2rem" }}>0</span>
          <span>Hrs</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "2rem" }}>0</span>
          <span>Min</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "2rem" }}>0</span>
          <span>Sec</span>
        </div>
      </div>

      <div>
        <h4>Deposit Chamber</h4>
      </div>
      <Button $size="small" $background="#333" $color="#fff">
        Switch to USDC
      </Button>

      <div
        style={{
          border: "1px solid #333",
          padding: "1rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        <span>SOL Amount to deposit:</span>
        <div>
          <Input type="number" placeholder="XX.XX" min={0.2} max={200} />
        </div>
      </div>

      <Button type="submit">Deposit {price} SOL</Button>

      <ul
        style={{ display: "inline-block", textAlign: "left", margin: "2rem 0" }}
      >
        <li>Deposit range: 0.2 SOL - 200 SOL</li>
        <li>Vesting: 100% unlocked at TGE</li>
      </ul>
    </form>
  );
};
