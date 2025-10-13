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
          <span style={{ fontSize: "1.5rem", color: "var(--accent-color)" }}>
            0.00023 SOL
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Amount Sold</span>
          <span style={{ fontSize: "1.5rem", color: "var(--accent-color)" }}>
            4000 SOL
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Backers</span>
          <span style={{ fontSize: "1.5rem", color: "var(--accent-color)" }}>
            255
          </span>
        </div>
      </div>

      <h4 style={{ marginTop: "2rem" }}>Time Remaining</h4>
      <Countdown />

      <hr style={{ margin: "3rem 0" }} />

      <div>
        <h3>Deposit Chamber</h3>
      </div>

      <div
        style={{
          border: "1px solid #333",
          padding: "1rem 2rem",
          display: "inline-flex",
          gap: "1rem",
          alignItems: "center",
          borderRadius: "1rem",
        }}
      >
        <span style={{ textAlign: "left" }}>Amount to deposit:</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "12rem",
            padding: "1rem 0",
          }}
        >
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
          {priceMode}
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
      </div>

      <br />
      <br />
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
