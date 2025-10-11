import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { TwitterConnect } from "@/components/twitter-connect";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useWalletBalance } from "@/hooks/useWalletBalance";

import { WalletConnect } from "@/components/wallet/wallet-connect";
import { WalletContext } from "@/components/wallet/wallet-context";

import { Container, Section, Status, Wrapper } from "./styles";
import { ReferralInput } from "@/components/referral-input";
import { WalletInfo } from "@/components/wallet/wallet-info";
import {
  Header,
  Hero,
  Partners,
  Main as LayoutMain,
  Section as LayoutSection,
} from "@/components/layout";

import "react-toastify/dist/ReactToastify.css";
import { FormPresale } from "@/components/form-presale";

const PageContent = () => {
  const {
    walletAddress,
    isTwitterConnected,
    isWalletConnected,
    name,
    completeWalletConnect,
    auth,
  } = useUserAuth();

  const { balanceSol } = useWalletBalance();

  const ready = Boolean(isWalletConnected && walletAddress);

  const handleTwitterConnect = async () => {
    toast.success("Twitter connected successfully!", {
      autoClose: 10000,
    });

    await auth();
  };

  const handleReferralApply = (refCode: string) => {
    toast.info(`Referral applied: ${refCode || "(empty)"}`, {
      autoClose: 5000,
    });
  };

  useEffect(() => {
    if (ready) {
      auth().catch(() => {});
    }
  }, [ready]);

  return (
    <Wrapper>
      <Container>
        <Header
          start={
            <a href="/">
              <img src="/images/logo.png" alt="Logo" height="40" />
            </a>
          }
          end={
            <WalletConnect
              requiresSignature={!ready}
              signatureEnabled={false}
              onConnect={completeWalletConnect}
            />
          }
        />
        <Hero
          title="Block Stranding"
          description="The First Fully On-Chain Adventure Game on Solana. On September 11th, 2025, we launched Block Stranding, a fully on-chain adventure game on Solana. We are the first to bring this concept to life and we are proud to be the first to do so."
          partners={[
            {
              name: "Solana",
              href: "https://solana.com",
              imageSrc: "/images/solana.png",
            },
            {
              name: "Magic Block",
              href: "https://github.com/magicblock-labs",
              imageSrc: "/images/magic-block.png",
            },
            {
              name: "Solflare",
              href: "https://solflare.com",
              imageSrc: "/images/solflare.png",
            },
            {
              name: "Solana",
              href: "https://solana.com",
              imageSrc: "/images/solana.png",
            },
            {
              name: "Magic Block",
              href: "https://github.com/magicblock-labs",
              imageSrc: "/images/magic-block.png",
            },
            {
              name: "Solflare",
              href: "https://solflare.com",
              imageSrc: "/images/solflare.png",
            },
          ]}
        />
        <LayoutMain
          sidebar={
            <>
              <Section $direction="column" $gap={16} $align="center">
                <h3>Wallet Connection</h3>
                <Status $connected={ready}>
                  {ready ? "Connected" : "Not Connected"}
                </Status>
                <WalletInfo
                  balanceSol={balanceSol}
                  whitelist="WhiteList1"
                  price={0.00023}
                />
              </Section>
              <Section $direction="column" $gap={16} $align="center">
                <h3>X Connection</h3>
                <Status $connected={isTwitterConnected}>
                  {isTwitterConnected ? "Connected" : "Not Connected"}
                </Status>
                <TwitterConnect name={name} onConnect={handleTwitterConnect} />
              </Section>
              <Section $direction="column" $gap={16} $align="center">
                <h3>Your referral id</h3>
                <Status $connected={ready}>
                  {ready ? "Available" : "Connect your wallet first"}
                </Status>
                <ReferralInput
                  disabled={!ready}
                  onApply={handleReferralApply}
                  minLength={4}
                  maxLength={4}
                />
              </Section>
            </>
          }
          content={<FormPresale />}
        />
        <Partners>
          <span>Item A</span>
          <span>Item B</span>
          <span>Item C</span>
          <span>Item D</span>
        </Partners>
        <LayoutSection>
          <div>Example Section content</div>
        </LayoutSection>
        <LayoutSection>
          <div>Example Section content</div>
        </LayoutSection>
      </Container>
    </Wrapper>
  );
};

export const Page = () => {
  return (
    <WalletContext>
      <ToastContainer
        theme="dark"
        position="top-right"
        hideProgressBar={true}
      />
      <PageContent />
    </WalletContext>
  );
};
