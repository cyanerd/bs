import React, { useState } from "react";
import { toast } from "react-toastify";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { usePresaleState } from "@/hooks/usePresaleState";
import {
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
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
import { ProgressBar } from "../progress-bar";
import {WalletInfo} from '@/api/presale';
import { PRESALE_TOTAL_SOL } from '@/api/config';
import { LoadingWrapper } from '@/components/loading-wrapper';

type Props = {
  defaultPriceMode?: "SOL" | "USDC";
  walletInfo?: WalletInfo | null;
};

export const FormPresale = ({ defaultPriceMode = "SOL", walletInfo }: Props) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, wallet } = useWallet();
  const { presaleState, loaded } = usePresaleState(wallet?.adapter.name);

  const [priceMode, setPriceMode] = useState<"SOL" | "USDC">(defaultPriceMode);
  const [solPrice, setSOLPrice] = useState<number | null>(null);
  const [usdcPrice, setUSDCPrice] = useState<number | null>(null);
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
      toast.error("Please connect your wallet first.");
      return;
    }

    // Only support SOL transfers for now
    if (priceMode === "USDC") {
      toast.error("USDC transfers are not yet supported. Please switch to SOL mode.");
      return;
    }

    try {
      const recipientAddress = "3waghJUxmn1kpZHbcspzmS6gBYEarw7zGR2tX7k39TyY";
      if (!recipientAddress) {
        toast.error(
          "Recipient wallet address is not configured. Please set VITE_RECIPIENT_WALLET in your environment variables.",
        );
        return;
      }
      const recipientPublicKey = new PublicKey(recipientAddress);

      const depositAmount = solPrice;
      if (!depositAmount) {
        toast.error("Please enter a valid deposit amount.");
        return;
      }

      // Validate deposit amount range
      if (depositAmount < MIN_DEPOSIT || depositAmount > MAX_DEPOSIT) {
        toast.error(
          `Deposit amount must be between ${MIN_DEPOSIT} SOL and ${MAX_DEPOSIT} SOL.`
        );
        return;
      }

      // Check if user has enough balance
      const balance = await connection.getBalance(publicKey);
      const balanceInSol = balance / LAMPORTS_PER_SOL;
      const requiredAmount = depositAmount + 0.001; // Add small buffer for transaction fee

      if (balanceInSol < requiredAmount) {
        toast.error(
          `Insufficient balance. You have ${balanceInSol?.toFixed(4)} SOL 
          but need ${requiredAmount?.toFixed(4)} SOL (including transaction fee).`,
        );
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
        }),
      );

      const signature = await sendTransaction(transaction, connection);
      console.log("Transaction sent:", signature);

      toast.error("Transaction sent! Confirming...");
      await connection.confirmTransaction(signature, "confirmed");

      toast.error(
        `Transfer successful! ${depositAmount} SOL sent to the presale wallet.\nTransaction: ${signature}`,
      );
    } catch (error: any) {
      console.error("Transfer error:", error);
      const errorMessage = error?.message || "Unknown error occurred";
      toast.error(
        `Transfer failed: ${errorMessage}\n\nPlease check the console for more details.`,
      );
    }
  };

  return (
    <FormRoot>
      <h3 style={{ marginTop: 0 }}>$STRAND Presale Live!</h3>

      <StatsGrid>
        <StatCard>
          <span>Price</span>
          <StatValue>
            <LoadingWrapper loaded={loaded}>
              $ {(walletInfo?.price ?? presaleState?.priceNoWL)?.toFixed(5)}
            </LoadingWrapper>
          </StatValue>
        </StatCard>
        <StatCard>
          <span>Total deposited</span>
          <StatValue>
            <LoadingWrapper loaded={loaded}>
              {presaleState?.sold?.toLocaleString()} SOL
            </LoadingWrapper>
          </StatValue>
        </StatCard>
        <StatCard>
          <span>Backers</span>
          <StatValue>
            <LoadingWrapper loaded={loaded}>
              {presaleState?.backers?.toLocaleString()}
            </LoadingWrapper>
          </StatValue>
        </StatCard>
      </StatsGrid>

      <ProgressBar
        value={Math.min((presaleState?.sold ?? 0) / PRESALE_TOTAL_SOL * 100, 100)}
        leftLabel={`${Math.round((presaleState?.sold ?? 0) / PRESALE_TOTAL_SOL * 100)}% of ${PRESALE_TOTAL_SOL?.toLocaleString()} SOL minimum`}
        style={{ margin: "1rem 2rem 0" }}
        loaded={loaded}
      />

      <SectionTitle>Time Remaining</SectionTitle>
      <Countdown dateTarget={(presaleState?.finish ?? 0) * 1000} />

      <Separator />

      <div>
        <h3 style={{ marginBottom: '0.8rem' }}>Deposit Chamber</h3>
      </div>

      <DepositCard>
        <AmountLabel>Amount to deposit:</AmountLabel>
        <AmountRow>
          <Input
            name="price"
            type="number"
            min={MIN_DEPOSIT}
            max={MAX_DEPOSIT}
            step="0.1"
            maxLength={6}
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
          />
          <span style={{ fontSize: '1.25rem' }}>{priceMode}</span>
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
          <AgreeLink href="/terms.pdf" target="_blank" rel="noopener noreferrer">
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
