import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
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
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

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

  const handleTransfer = async () => {
    if (!publicKey) {
      alert('Please connect your wallet first.');
      return;
    }

    // Only support SOL transfers for now
    if (priceMode === "USDC") {
      alert('USDC transfers are not yet supported. Please switch to SOL mode.');
      return;
    }

    try {
      const recipientAddress = "3waghJUxmn1kpZHbcspzmS6gBYEarw7zGR2tX7k39TyY";
      if (!recipientAddress) {
        alert('Recipient wallet address is not configured. Please set VITE_RECIPIENT_WALLET in your environment variables.');
        return;
      }
      const recipientPublicKey = new PublicKey(recipientAddress);

      const depositAmount = solPrice;
      if (!depositAmount) {
        alert('Please enter a valid deposit amount.');
        return;
      }

      // Check if user has enough balance
      const balance = await connection.getBalance(publicKey);
      const balanceInSol = balance / LAMPORTS_PER_SOL;
      const requiredAmount = depositAmount + 0.001; // Add small buffer for transaction fee

      if (balanceInSol < requiredAmount) {
        alert(`Insufficient balance. You have ${balanceInSol.toFixed(4)} SOL but need ${requiredAmount.toFixed(4)} SOL (including transaction fee).`);
        return;
      }

      // Create transaction with recent blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: publicKey,
      }).add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPublicKey,
          lamports: depositAmount * LAMPORTS_PER_SOL,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      console.log('Transaction sent:', signature);
      
      alert('Transaction sent! Confirming...');
      await connection.confirmTransaction(signature, 'confirmed');

      alert(`Transfer successful! ${depositAmount} SOL sent to the presale wallet.\nTransaction: ${signature}`);
    } catch (error: any) {
      console.error('Transfer error:', error);
      const errorMessage = error?.message || 'Unknown error occurred';
      alert(`Transfer failed: ${errorMessage}\n\nPlease check the console for more details.`);
    }
  };

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
        disabled={!agree || !isPriceValid}
        disabledText={
          !isPriceValid
            ? `Invalid deposit amount. Please enter a value between ${MIN_DEPOSIT} ${priceMode} and ${MAX_DEPOSIT} ${priceMode}.`
            : "You must agree to the terms and conditions"
        }
        onClick={handleTransfer}
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
