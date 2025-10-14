import React, { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Countdown } from "../countdown";
import {
  FormRoot,
  StatsGrid,
  StatCard,
  StatValue,
  SectionTitle,
  Separator,
  DepositCard,
  AmountLabel,
  AmountRow,
  ConstraintsList,
} from "./styles";
// import SolanaIcon from "@/components/icons/solana.svg";

type Props = {
  defaultPriceMode?: "SOL" | "USDC";
};

export const FormPresale = ({ defaultPriceMode = "SOL" }: Props) => {
  const [priceMode, setPriceMode] = useState<"SOL" | "USDC">(defaultPriceMode);
  const [solPrice, setSOLPrice] = useState(200);
  const [usdcPrice, setUSDCPrice] = useState(10);
  const [agree, setAgree] = useState(true);

  return (
    <FormRoot>
      <h3>$STRAND Presale Live!</h3>

      <StatsGrid>
        <StatCard>
          <span>Your price</span>
          <StatValue>$ 0.00023</StatValue>
        </StatCard>
        <StatCard>
          <span>Amount Sold</span>
          <StatValue>4000 SOL</StatValue>
        </StatCard>
        <StatCard>
          <span>Backers</span>
          <StatValue>255</StatValue>
        </StatCard>
      </StatsGrid>

      <SectionTitle>Time Remaining</SectionTitle>
      <Countdown />

      <Separator />

      <div>
        <h3>Deposit Chamber</h3>
      </div>

      <DepositCard>
        <AmountLabel>Amount to deposit:</AmountLabel>
        <AmountRow>
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
        </AmountRow>
      </DepositCard>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "2rem 0 3rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree">
          I agree to{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            the terms and conditions
          </a>
        </label>
      </div>

      <Button
        disabled={!agree}
        disabledText="You must agree to the terms and conditions"
      >
        Deposit {priceMode === "SOL" ? solPrice : usdcPrice} {priceMode}
      </Button>

      <ConstraintsList>
        <li>Deposit range: 0.2 SOL - 200 SOL</li>
        <li>Vesting: 100% unlocked at TGE</li>
      </ConstraintsList>
    </FormRoot>
  );
};
