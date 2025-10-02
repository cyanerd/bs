import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { TwitterConnect } from "@/components/twitter-connect";
import { useUserAuth } from "@/hooks/useUserAuth";

import { WalletConnect } from "@/components/wallet/wallet-connect";
import { WalletContext } from "@/components/wallet/wallet-context";

import { WalletModal } from "@/components/wallet/wallet-modal";

import { Section, Status, Title, Wrapper } from "./styles";

import "react-toastify/dist/ReactToastify.css";

const PageContent = () => {
  const [walletModalVisible, setWalletModalVisible] = useState(false);

  const {
    twitterLocked,
    walletAddress,
    isTwitterConnected,
    isWalletConnected,
    name,
    completeWalletConnect,
    auth,
  } = useUserAuth();

  const handleTwitterConnect = () => {
    toast.success("Twitter Connected Successfully!", {
      autoClose: 10000,
    });

    auth();
  };


  
  return (
    <>
      {walletModalVisible && <WalletModal onClose={() => setWalletModalVisible(false)} />}
      <Wrapper>
        <Section $direction="column" $gap={16}>
          <Section $direction="column">
            <Title>Wallet Connection</Title>
            <Section $direction="column" $align="start" $gap={8}>
              <Status $connected={Boolean(isWalletConnected && walletAddress)}>{isWalletConnected && walletAddress ? "Connected" : "Not Connected"}</Status>
              <WalletConnect isConnected={isWalletConnected} setModalVisible={setWalletModalVisible} onConnect={completeWalletConnect} />
            </Section>
          </Section>
          <Section $direction="column">
            <Title>X Connection</Title>
            <Section $direction="column" $align="start" $gap={8}>
              <Status $connected={isTwitterConnected}>{isTwitterConnected ? "Connected" : "Not Connected"}</Status>
              <TwitterConnect name={name} disabled={twitterLocked} onConnect={handleTwitterConnect} />
            </Section>
          </Section>
        </Section>
      </Wrapper>
    </>
  );
};

const Page = () => {
  return (
    <WalletContext>
      <ToastContainer theme="dark" position="top-right" hideProgressBar={true} />
      <PageContent />
    </WalletContext>
  );
};

export default Page;
