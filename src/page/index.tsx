import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { TwitterConnect } from "@/components/twitter-connect";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useWalletBalance } from "@/hooks/useWalletBalance";

import { WalletConnect } from "@/components/wallet/wallet-connect";
import { WalletContext } from "@/components/wallet/wallet-context";

import { Container, Wrapper, Flexbox } from "./styles";
import { ReferralInput } from "@/components/referral-input";
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
import { Posts } from "@/components/posts";

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
              name: "Play Solana",
              href: "#",
              imageSrc: "/images/partners/Play-Solana.jpg",
            },
            {
              name: "Solana Mobile",
              href: "#",
              imageSrc: "/images/partners/Solana-Mobile.jpg",
            },
            {
              name: "Magic Block",
              href: "#",
              imageSrc: "/images/partners/Magic-Block.jpg",
            },
            {
              name: "Magic Eden",
              href: "#",
              imageSrc: "/images/partners/Magic-Eden.jpg",
            },
            {
              name: "Phantom",
              href: "#",
              imageSrc: "/images/partners/Phantom.jpg",
            },
            {
              name: "Solflare",
              href: "#",
              imageSrc: "/images/partners/Solflare.jpg",
            },
          ]}
        />
        <LayoutMain
          sidebar={
            <>
              <Sidebar />
              {/* <hr /> */}
              <Flexbox $direction="column" $gap={16} $align="center">
                <h4 className="my-0">Know Ref Code?</h4>
                <ReferralInput
                  disabled={!ready}
                  onApply={handleReferralApply}
                  minLength={4}
                  maxLength={4}
                />
              </Flexbox>
            </>
          }
          content={<FormPresale />}
        />

        <LayoutSection
          $border="3px solid var(--primary-color)"
          $background="#222"
        >
          <Flexbox $direction="row" $gap={16} $align="center">
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 style={{ margin: "0 0 .5rem 0" }}>
                Boost your bag up to 20%! *
              </h4>
              <span style={{ fontSize: "1.25rem" }}>
                Connect your X account and tweet a shoutout to the presale
              </span>
              <span style={{ fontSize: "0.875rem", color: "#999" }}>
                * Your final boost size is calculated based on your X
                engagement, content uniqueness, smart follower reach, and other
                factors.
              </span>
            </div>

            <TwitterConnect name={name} onConnect={handleTwitterConnect} />
          </Flexbox>
        </LayoutSection>

        <LayoutSection>
          <Posts />
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
