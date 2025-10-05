import {
  createDefaultAddressSelector,
  createDefaultAuthorizationResultCache,
  SolanaMobileWalletAdapter,
} from "@solana-mobile/wallet-adapter-mobile";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export const WalletContext: React.FC<Props> = ({ children }) => {
  const endpoint = useMemo(
    () =>
      // Prefer env override; default to provided Helius endpoint
      import.meta.env.VITE_SOLANA_RPC_ENDPOINT ||
      "https://devina-1fn4pi-fast-mainnet.helius-rpc.com",
    [],
  );

  const wsEndpoint = useMemo(
    () =>
      import.meta.env.VITE_SOLANA_WS_ENDPOINT ||
      (endpoint.startsWith("http")
        ? endpoint.replace("http", "ws")
        : undefined),
    [],
  );

  const wallets = useMemo(() => {
    if (/Android/i.test(navigator.userAgent)) {
      return [
        new SolanaMobileWalletAdapter({
          addressSelector: createDefaultAddressSelector(),
          authorizationResultCache: createDefaultAuthorizationResultCache(),
          chain: WalletAdapterNetwork.Mainnet,
          onWalletNotFound: async () => Promise.resolve(),
          appIdentity: {
            name: "Blockstranding",
            uri: location.origin,
            icon: "/logotype.png",
          },
        }),
      ];
    } else {
      return [new PhantomWalletAdapter(), new SolflareWalletAdapter()];
    }
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint} config={{ wsEndpoint }}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};
