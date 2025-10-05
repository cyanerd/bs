import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { TwitterConnect } from "@/components/twitter-connect";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useWalletBalance } from "@/hooks/useWalletBalance";

import { WalletConnect } from "@/components/wallet/wallet-connect";
import { WalletContext } from "@/components/wallet/wallet-context";

import { Container, Section, Status, Title, Wrapper } from "./styles";
import { ReferralInput } from "@/components/referral-input";
import { WalletInfo } from "@/components/wallet/wallet-info";

import "react-toastify/dist/ReactToastify.css";

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
        <Section $direction="column" $gap={16}>
          <Section $direction="column" $gap={16} $align="center">
            <Title>Wallet Connection</Title>
            <Status $connected={ready}>
              {ready ? "Connected" : "Not Connected"}
            </Status>
            <WalletConnect
              requiresSignature={!ready}
              signatureEnabled={false}
              onConnect={completeWalletConnect}
            />
            <WalletInfo
              balanceSol={balanceSol}
              whitelist="WhiteList1"
              price={0.00023}
            />
          </Section>
          <Section $direction="column" $gap={16} $align="center">
            <Title>X Connection</Title>
            <Status $connected={isTwitterConnected}>
              {isTwitterConnected ? "Connected" : "Not Connected"}
            </Status>
            <TwitterConnect name={name} onConnect={handleTwitterConnect} />
          </Section>
        </Section>
      </Container>
      <Container>
        <Section $direction="column" $gap={16} $align="center">
          <Title>Your referral id</Title>
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
      </Container>
    </Wrapper>
  );
};

export const Page = () => {
  useEffect(() => {
    toast.success("The page is ready!", {
      autoClose: 5000,
    });
  }, []);

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
