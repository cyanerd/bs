import { createDefaultAddressSelector, createDefaultAuthorizationResultCache, SolanaMobileWalletAdapter } from '@solana-mobile/wallet-adapter-mobile';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useMemo } from 'react';

type Props = {
  children: React.ReactNode;
}

export const WalletContext: React.FC<Props> = ({ children }) => {
  const endpoint = useMemo(() => (
    clusterApiUrl(WalletAdapterNetwork.Mainnet)
  ), []);

  const wallets = useMemo(() => {
    if (/Android/i.test(navigator.userAgent)) {
      return [
        new SolanaMobileWalletAdapter({
          addressSelector: createDefaultAddressSelector(),
          authorizationResultCache: createDefaultAuthorizationResultCache(),
          chain: WalletAdapterNetwork.Mainnet,
          onWalletNotFound: async () => Promise.resolve(),
          appIdentity: {
            name: 'Blockstranding',
            uri: location.origin,
            icon: '/logotype.png',
          },
        }),
      ];
    } else {
      return [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
      ];
    }
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};
