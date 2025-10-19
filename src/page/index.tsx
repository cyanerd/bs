import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { TwitterConnect } from "@/components/twitter/twitter-connect";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useWalletBalance } from "@/hooks/useWalletBalance";

import { WalletConnect } from "@/components/wallet/wallet-connect";
import { WalletContext } from "@/components/wallet/wallet-context";

import { Container, Wrapper, Flexbox } from "./styles";
import { ReferralInput } from "@/components/referral/referral-input";
import { WalletInfo } from "@/components/wallet/wallet-info";
import {
  Header,
  Hero,
  Main as LayoutMain,
  Section as LayoutSection,
} from "@/components/layout";

import "react-toastify/dist/ReactToastify.css";
import { FormPresale } from "@/components/form-presale";
import { Sidebar } from "@/components/sidebar";
import { FAQ } from "@/components/faq";
import { TwitterBoost } from "@/components/twitter/twitter-boost";
import { TwitterSays } from "@/components/twitter/twitter-says";
import { FormReferral } from "@/components/referral/form-referral";
import { Tokenomics } from "@/components/tokenomics";

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
            <>
              <a href="/" style={{ position: "relative", top: "3px" }}>
                <img src="/images/logo.png" alt="Logo" height="40" />
              </a>
              <div style={{ display: "flex", gap: "0.75rem", marginLeft: "1.5rem" }}>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  <img src="/icons/discord.png" alt="Discord" height="20" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  <img src="/icons/git.png" alt="Git" height="20" />
                </a>
              </div>
            </>
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
        />
        <LayoutMain
          sidebar={
            <>
              <Sidebar />
              <FormReferral
                ready={ready}
                handleReferralApply={handleReferralApply}
              />
            </>
          }
          content={<FormPresale />}
        />

        <LayoutSection
          $border="3px solid var(--primary-color)"
          $background="#222"
        >
          <TwitterBoost onConnect={handleTwitterConnect} name={name} />
        </LayoutSection>

        <LayoutSection>
          <TwitterSays />
        </LayoutSection>

        <LayoutSection>
          <Tokenomics />
        </LayoutSection>

        <LayoutSection>
          <FAQ />
        </LayoutSection>

        <br />
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
