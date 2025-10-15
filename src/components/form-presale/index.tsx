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
  AgreeContainer,
  AgreeCheckbox,
  AgreeLabel,
  AgreeLink,
} from "./styles";
// import SolanaIcon from "@/components/icons/solana.svg";

type Props = {
  defaultPriceMode?: "SOL" | "USDC";
};

export const FormPresale = ({ defaultPriceMode = "SOL" }: Props) => {
  const [priceMode, setPriceMode] = useState<"SOL" | "USDC">(defaultPriceMode);
  const [solPrice, setSOLPrice] = useState<number | null>(200);
  const [usdcPrice, setUSDCPrice] = useState<number | null>(10);
  const [agree, setAgree] = useState(true);

  // Deposit constraints
  const MIN_DEPOSIT = 0.2;
  const MAX_DEPOSIT = 200;

  // Derived state
  const activePrice = priceMode === "SOL" ? solPrice : usdcPrice;
  const isPriceValid =
    activePrice !== null &&
    activePrice >= MIN_DEPOSIT &&
    activePrice <= MAX_DEPOSIT;

  return (
    <FormRoot>
      <h3>$STRAND Presale Live!</h3>

      <StatsGrid>
        <StatCard>
          {/* Should be equal to Token Price in Sidebar */}
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
            placeholder="XXX.XX"
            min={MIN_DEPOSIT}
            max={MAX_DEPOSIT}
            step="0.1"
            value={priceMode === "SOL" ? solPrice ?? "" : usdcPrice ?? ""}
            onChange={(e) => {
              const nextValue =
                e.target.value === "" ? null : Number(e.target.value);
              if (priceMode === "SOL") {
                setSOLPrice(nextValue);
              } else {
                setUSDCPrice(nextValue);
              }
            }}
            onBlur={() => {
              if (priceMode === "SOL") {
                if (solPrice === null) return;
                const clamped = Math.min(
                  MAX_DEPOSIT,
                  Math.max(MIN_DEPOSIT, solPrice),
                );
                if (clamped !== solPrice) setSOLPrice(clamped);
              } else {
                if (usdcPrice === null) return;
                const clamped = Math.min(
                  MAX_DEPOSIT,
                  Math.max(MIN_DEPOSIT, usdcPrice),
                );
                if (clamped !== usdcPrice) setUSDCPrice(clamped);
              }
            }}
          />
          {priceMode}
        </AmountRow>
      </DepositCard>

      <AgreeContainer>
        <AgreeCheckbox
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <AgreeLabel htmlFor="agree">
          I agree to{" "}
          <AgreeLink href="#" target="_blank" rel="noopener noreferrer">
            the terms and conditions
          </AgreeLink>
        </AgreeLabel>
      </AgreeContainer>

      <Button
        type="submit"
        disabled={!agree || !isPriceValid}
        disabledText={
          !isPriceValid
            ? `Invalid deposit amount. Please enter a value between ${MIN_DEPOSIT} ${priceMode} and ${MAX_DEPOSIT} ${priceMode}.`
            : "You must agree to the terms and conditions"
        }
      >
        Deposit {priceMode === "SOL" ? solPrice ?? 0 : usdcPrice ?? 0}{" "}
        {priceMode}
      </Button>

      <ConstraintsList>
        <li>
          Deposit range: {MIN_DEPOSIT} {priceMode} - {MAX_DEPOSIT} {priceMode}
        </li>
        <li>Vesting: 100% unlocked at TGE</li>
      </ConstraintsList>
    </FormRoot>
  );
};
