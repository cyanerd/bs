import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { useUserAuth } from "@/hooks/useUserAuth";
import { usePresaleState } from "@/hooks/usePresaleState";
import { fetchWalletInfo } from "@/api/presale";
import { setCookie, REFERRAL_CODE_COOKIE_NAME } from "@/utils/cookies";

import { WalletConnect } from "@/components/wallet/wallet-connect";
import { WalletContext } from "@/components/wallet/wallet-context";

import { Container, Wrapper } from "./styles";
import {
  Header,
  Hero,
  Main as LayoutMain,
  Section as LayoutSection,
} from "@/components/layout";
import { Partners, Row, Link, LinkBadge } from "@/components/layout/hero/styles";

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
    walletInfo,
    walletName,
    referralCode,
    setReferralCode,
  } = useUserAuth();

  const { presaleState, loaded } = usePresaleState(walletName);

  const ready = Boolean(isWalletConnected && walletAddress);

  const handleTwitterConnect = async () => {
    toast.success("Twitter connected successfully!", {
      autoClose: 10000,
    });

    await auth();
  };

  const handleReferralApply = async (refCode: string) => {
    setReferralCode(refCode);
    setCookie(REFERRAL_CODE_COOKIE_NAME, refCode);

    toast.success(`Referral code applied: ${refCode}`, {
      autoClose: 5000,
    });
  };

  useEffect(() => {
    if (ready && walletAddress) {
      (async () => {
        try {
          await fetchWalletInfo(walletName, referralCode);
        } catch (e) {
          // swallow, already logged in API layer
        }
      })();
    }
  }, [ready, walletAddress, walletName, referralCode]);

  type PartnerItem = {
    name: string;
    href: string;
    imageSrc: string;
  };

  const partners: PartnerItem[] = [
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
  ];

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
                    display: "block",
                    width: "34px",
                    height: "34px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <img src="/icons/1_twi.png" alt="X" width="100%" height="100%" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "34px",
                    height: "34px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <img src="/icons/2_discord_button.png" alt="Discord" width="100%" height="100%" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "34px",
                    height: "34px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <img src="/icons/3_gitbook_button.png" alt="GitBook" width="100%" height="100%" />
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
              <Sidebar presaleState={presaleState} walletInfo={walletInfo} loaded={loaded} />
              <FormReferral
                ready={ready}
                handleReferralApply={handleReferralApply}
                currentReferralCode={referralCode}
              />
            </>
          }
          content={<FormPresale walletInfo={walletInfo} />}
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
          <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Partners</h3>
          <Partners style={{ border: 'none', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {partners.map((partner, index) => (
              <Row key={index}>
                <Link
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.imageSrc}
                    alt={partner.name}
                    height={56}
                    style={{ borderRadius: 4 }}
                  />
                  <LinkBadge>View on X</LinkBadge>
                </Link>
              </Row>
            ))}
          </Partners>
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
