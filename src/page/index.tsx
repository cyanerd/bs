import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Header,
  Hero,
  Main as LayoutMain,
  Section as LayoutSection,
} from "@/components/layout";
import { FormPresale } from "@/components/form-presale";
import { Sidebar } from "@/components/sidebar";
import { FAQ } from "@/components/faq";
import { TwitterBoost } from "@/components/twitter/twitter-boost";
import { TwitterSays } from "@/components/twitter/twitter-says";
import { FormReferral } from "@/components/referral/form-referral";
import { Tokenomics } from "@/components/tokenomics";
import { OUR_FRIENDS, Partners } from "@/components/partners";
import { WalletContext } from "@/components/wallet/wallet-context";
import { useUserAuth } from "@/hooks/useUserAuth";
import { usePresaleState } from "@/hooks/usePresaleState";

import { Container, Wrapper } from "./styles";

const PRESALE_OFF = false;

const PageContent = () => {
  const {
    walletAddress,
    isWalletConnected,
    name,
    completeWalletConnect,
    auth,
    walletInfo,
    walletBalance,
    walletName,
    referralCode,
    setReferralCode,
    fetchWalletInfo,
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
  };

  useEffect(() => {
    if (ready && walletAddress) {
      (async () => {
        try {
          await fetchWalletInfo();
        } catch (e) {
          // swallow, already logged in API layer
        }
      })();
    }
  }, [ready, walletAddress, walletName]);

  useEffect(() => {
    if (ready && walletAddress) {
      (async () => {
        try {
          await fetchWalletInfo(true);
        } catch (e) {
          // swallow, already logged in API layer
        }
      })();
    }
  }, [referralCode]);

  return (
    <Wrapper>
      <Container>
        <Header
          start={
            <>
              <a href="/" style={{ position: "relative", top: "3px" }}>
                <img src="/images/logo.png" alt="Logo" height="40" />
              </a>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginLeft: "1.5rem",
                }}
              >
                <a
                  href="https://x.com/blockstranding"
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
                  <img
                    src="/icons/1_twi.png"
                    alt="X"
                    width="100%"
                    height="100%"
                  />
                </a>
                <a
                  // href=""
                  // target="_blank"
                  // rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "34px",
                    height: "34px",
                    transition: "all 0.2s ease",
                  }}
                  // onMouseEnter={(e) => {
                  //   e.currentTarget.style.opacity = "0.8";
                  // }}
                  // onMouseLeave={(e) => {
                  //   e.currentTarget.style.opacity = "1";
                  // }}
                >
                  <img
                    src="/icons/2_discord_button.png"
                    alt="Discord"
                    width="100%"
                    height="100%"
                  />
                </a>
                <a
                  // href=""
                  // target="_blank"
                  // rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "34px",
                    height: "34px",
                    transition: "all 0.2s ease",
                  }}
                  // onMouseEnter={(e) => {
                  //   e.currentTarget.style.opacity = "0.8";
                  // }}
                  // onMouseLeave={(e) => {
                  //   e.currentTarget.style.opacity = "1";
                  // }}
                >
                  <img
                    src="/icons/3_gitbook_button.png"
                    alt="GitBook"
                    width="100%"
                    height="100%"
                  />
                </a>
              </div>
            </>
          }
          end={<></>}
        />
        <Hero />
        <LayoutMain
          sidebar={
            <>
              <Sidebar
                presaleState={presaleState}
                walletInfo={walletInfo}
                loaded={loaded}
              />
              <FormReferral
                ready={ready}
                handleReferralApply={handleReferralApply}
                currentReferralCode={referralCode}
              />
            </>
          }
          content={
            <FormPresale
              walletInfo={walletInfo}
              walletBalance={walletBalance}
              requiresSignature={ready}
              onConnect={completeWalletConnect}
              onRefreshWalletInfo={fetchWalletInfo}
              showDepositPrice
              presaleOff={PRESALE_OFF}
              presaleState={presaleState}
              loaded={loaded}
            />
          }
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
          <Partners items={OUR_FRIENDS} title="Collaborations" noBorder />
        </LayoutSection>

        <LayoutSection>
          <FAQ />
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
        position="top-center"
        hideProgressBar={true}
      />
      <PageContent />
    </WalletContext>
  );
};
