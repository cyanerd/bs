import React, { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Countdown } from "../countdown";
// import SolanaIcon from "@/components/icons/solana.svg";

type Props = {
  defaultPriceMode?: "SOL" | "USDC";
};

export const FormPresale = ({ defaultPriceMode = "SOL" }: Props) => {
  const [priceMode, setPriceMode] = useState<"SOL" | "USDC">(defaultPriceMode);
  const [solPrice, setSOLPrice] = useState(200);
  const [usdcPrice, setUSDCPrice] = useState(10);

  return (
    <form>
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
      <Countdown />

      <div>
        <h4>Deposit Chamber</h4>
      </div>
      <Button
        type="button"
        onClick={() =>
          setPriceMode((prev) => (prev === "SOL" ? "USDC" : "SOL"))
        }
        $size="small"
        $background="#333"
        $color="#fff"
      >
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
          borderRadius: "1rem",
        }}
      >
        <span>{priceMode} Amount to deposit:</span>
        <div>
          <Input
            name="price"
            type="number"
            placeholder="XX.XX"
            value={priceMode === "SOL" ? solPrice : usdcPrice}
            onChange={(e) =>
              priceMode === "SOL"
                ? setSOLPrice(Number(e.target.value))
                : setUSDCPrice(Number(e.target.value))
            }
          />
        </div>
      </div>

      <Button type="submit">
        Deposit {priceMode === "SOL" ? solPrice : usdcPrice} {priceMode}
      </Button>

      <ul
        style={{ display: "inline-block", textAlign: "left", margin: "2rem 0" }}
      >
        <li>Deposit range: 0.2 SOL - 200 SOL</li>
        <li>Vesting: 100% unlocked at TGE</li>
      </ul>
    </form>
  );
};
