import type { MessageSignerWalletAdapterProps } from '@solana/wallet-adapter-base';
import type { PublicKey } from '@solana/web3.js';
import bs58 from 'bs58';

import { getCookie, removeCookie, setCookie } from './cookies';
import { SIGNATURE_COOKIE_NAME, SIGNATURE_WALLET_COOKIE_NAME } from './cookies/const';
import { getSignMessage } from '@/api/wallet/getSignMessage';
import { signVerify } from '@/api/wallet/signVerify';

export class Web3 {
  public static async signVerify(publicKey: PublicKey, signMessageFn: MessageSignerWalletAdapterProps['signMessage']) {
    const wallet = publicKey.toString();
    const storedSignature = getCookie(SIGNATURE_COOKIE_NAME);
    const storedWallet = getCookie(SIGNATURE_WALLET_COOKIE_NAME);

    if (storedSignature && wallet === storedWallet) {
      console.info('Found existing signature, verifying...');
  
      try {
        const data = await signVerify(wallet, storedSignature);
        if (data.result === "success") {
          return true;
        } else {
          console.error('Signature verification failed');
          removeCookie(SIGNATURE_COOKIE_NAME);
          removeCookie(SIGNATURE_WALLET_COOKIE_NAME);
        }
      } catch (error) {
        console.error(`Failed on call sign API method\n${(error as Error).message}`);
        removeCookie(SIGNATURE_COOKIE_NAME);
        removeCookie(SIGNATURE_WALLET_COOKIE_NAME);
      }
    } else {
      console.info('No valid signature found');
      if (storedSignature) {
        removeCookie(SIGNATURE_COOKIE_NAME);
        removeCookie(SIGNATURE_WALLET_COOKIE_NAME);
      }
    }
    
    console.info('Attempting to sign new message');

    try {
      const signResult = await Web3.signWallet(publicKey, signMessageFn);
      if (signResult) {
        console.info('New signature created successfully');
  
        const newSignature = getCookie(SIGNATURE_COOKIE_NAME);
        if (newSignature) {
          console.info('Verifying newly created signature');
          try {
            const data = await signVerify(wallet, newSignature);
            if (data.result === "success") {
              return true;
            } else {
              console.error('New signature verification failed');
              removeCookie(SIGNATURE_COOKIE_NAME);
              removeCookie(SIGNATURE_WALLET_COOKIE_NAME);
            }
          } catch (error) {
            console.error(`Failed on call new sign API method\n${(error as Error).message}`);
            removeCookie(SIGNATURE_COOKIE_NAME);
            removeCookie(SIGNATURE_WALLET_COOKIE_NAME);
          }
        } else {
          console.error(`No signature found after signing`);
        }
      } else {
        console.error(`No response from sign API method`);
      }
    } catch (error) {
      console.error(`Failed on signing\n${(error as Error).message}`);
    }

    return false;
  }

  public static async signWallet(publicKey: PublicKey, signMessageFn: MessageSignerWalletAdapterProps['signMessage']) {
    const currentSignature = getCookie(SIGNATURE_COOKIE_NAME);
    const currentPublicKeyString = getCookie(SIGNATURE_WALLET_COOKIE_NAME);
    const publicKeyString = publicKey.toBase58();

    if (currentSignature && publicKeyString === currentPublicKeyString) {
      console.log('[WEB3] Sign presents:', currentSignature);
      return false;
    }

    const { result, message } = await getSignMessage(publicKeyString);
    if (result !== 'success') {
      throw new Error('Unable to sign wallet: ' + message);
    }

    const signature = await this.signMessage(message, signMessageFn);

    setCookie(SIGNATURE_COOKIE_NAME, signature);
    setCookie(SIGNATURE_WALLET_COOKIE_NAME, publicKeyString);

    return true;
  }

  public static async signMessage(message: string, signMessageFn: MessageSignerWalletAdapterProps['signMessage']) {
    const messageBytes = new TextEncoder().encode(message);
    const signature = await signMessageFn(messageBytes);

    return bs58.encode(signature);
  }
}
