import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { TwitterConnect } from "@/components/twitter-connect";
import { useUserAuth } from "@/hooks/useUserAuth";

import { WalletConnect } from "@/components/wallet/wallet-connect";
import { WalletContext } from "@/components/wallet/wallet-context";

import { Section, Status, Title, Wrapper } from "./styles";

import "react-toastify/dist/ReactToastify.css";

const PageContent = () => {
  const {
    twitterLocked,
    walletAddress,
    isTwitterConnected,
    isWalletConnected,
    name,
    completeWalletConnect,
    auth,
  } = useUserAuth();

  const ready = Boolean(isWalletConnected && walletAddress);

  const handleTwitterConnect = async () => {
    toast.success("Twitter connected successfully!", {
      autoClose: 10000,
    });

    await auth();
  };

  useEffect(() => {
    if (ready) {
      auth().catch(() => {});
    }
  }, [ready]);

  return (
    <Wrapper>
      <Section $direction="column" $gap={16}>
        <Section $direction="column">
          <Title>Wallet Connection</Title>
          <Section $direction="column" $align="start" $gap={8}>
            <Status $connected={ready}>
              {ready ? "Connected" : "Not Connected"}
            </Status>
            <WalletConnect
              requiresSignature={!ready}
              signatureEnabled={false}
              onConnect={completeWalletConnect}
            />
          </Section>
        </Section>
        <Section $direction="column">
          <Title>X Connection</Title>
          <Section $direction="column" $align="start" $gap={8}>
            <Status $connected={isTwitterConnected}>
              {isTwitterConnected ? "Connected" : "Not Connected"}
            </Status>
            <TwitterConnect
              name={name}
              disabled={twitterLocked}
              onConnect={handleTwitterConnect}
            />
          </Section>
        </Section>
      </Section>
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
