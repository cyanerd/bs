import { Centrifuge } from 'centrifuge';

// Centrifuge configuration constants
const CENTRIFUGE_URL = 'wss://presale.blockstranding.com/connection/websocket';
const CENTRIFUGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiczEiLCJpYXQiOjE3NjEwNTQ5Mjl9.gEaWNFDrqb7NBxOxWjGRE1Dk_z74D9UdE5BlqDPJ-68';

export interface CentrifugeCallbacks {
  onPresaleStateUpdate?: (data: any) => void;
  onWalletDepositUpdate?: (totalDeposited: number) => void;
}

class CentrifugeService {
  private centrifuge: Centrifuge | null = null;
  private presaleStateSubscription: any = null;
  private walletSubscription: any = null;
  private callbacks: CentrifugeCallbacks = {};
  private isConnected = false;

  constructor() {
    this.initialize();
  }

  private initialize() {
    // Create centrifuge client
    this.centrifuge = new Centrifuge(CENTRIFUGE_URL, {
      token: CENTRIFUGE_TOKEN
    });

    // Connection event handlers
    this.centrifuge.on('connecting', (ctx) => {
      console.log('Centrifuge connecting', ctx);
    });

    this.centrifuge.on('connected', (ctx) => {
      console.log('Centrifuge connected', ctx);
      this.isConnected = true;
      this.subscribeToPresaleState();
    });

    this.centrifuge.on('disconnected', (ctx) => {
      console.log('Centrifuge disconnected', ctx);
      this.isConnected = false;
    });

    this.centrifuge.on('error', (ctx) => {
      console.error('Centrifuge error', ctx);
    });
  }

  connect(callbacks?: CentrifugeCallbacks) {
    if (callbacks) {
      this.callbacks = callbacks;
    }

    if (this.centrifuge && !this.isConnected) {
      this.centrifuge.connect();
    }
  }

  disconnect() {
    if (this.walletSubscription) {
      this.walletSubscription.unsubscribe();
      this.walletSubscription = null;
    }

    if (this.presaleStateSubscription) {
      this.presaleStateSubscription.unsubscribe();
      this.presaleStateSubscription = null;
    }

    if (this.centrifuge) {
      this.centrifuge.disconnect();
      this.isConnected = false;
    }
  }

  private subscribeToPresaleState() {
    if (!this.centrifuge || !this.isConnected) return;

    this.presaleStateSubscription = this.centrifuge.newSubscription('bs_state');

    this.presaleStateSubscription.on('publication', (ctx: any) => {
      console.log('Presale state update:', ctx.data);
      if (this.callbacks.onPresaleStateUpdate) {
        this.callbacks.onPresaleStateUpdate(ctx.data);
      }
    });

    this.presaleStateSubscription.on('subscribed', (ctx: any) => {
      console.log('Subscribed to bs_state', ctx);
    });

    this.presaleStateSubscription.on('error', (ctx: any) => {
      console.error('Subscription error bs_state', ctx);
    });

    this.presaleStateSubscription.subscribe();
  }

  subscribeToWallet(walletAddress: string) {
    if (!this.centrifuge || !this.isConnected) return;

    // Unsubscribe from previous wallet channel if exists
    if (this.walletSubscription) {
      this.walletSubscription.unsubscribe();
    }

    const channelName = `bs_${walletAddress}`;
    this.walletSubscription = this.centrifuge.newSubscription(channelName);

    this.walletSubscription.on('publication', (ctx: any) => {
      console.log('Wallet deposit update:', ctx.data);
      // According to requirements, only totalDeposited number is received
      if (this.callbacks.onWalletDepositUpdate && typeof ctx.data === 'number') {
        this.callbacks.onWalletDepositUpdate(ctx.data);
      }
    });

    this.walletSubscription.on('subscribed', (ctx: any) => {
      console.log(`Subscribed to ${channelName}`, ctx);
    });

    this.walletSubscription.on('error', (ctx: any) => {
      console.error(`Subscription error ${channelName}`, ctx);
    });

    this.walletSubscription.subscribe();
  }

  unsubscribeFromWallet() {
    if (this.walletSubscription) {
      this.walletSubscription.unsubscribe();
      this.walletSubscription = null;
    }
  }

  updateCallbacks(callbacks: CentrifugeCallbacks) {
    this.callbacks = { ...this.callbacks, ...callbacks };
  }

  get isConnectedToCentrifuge(): boolean {
    return this.isConnected;
  }
}

// Create singleton instance
export const centrifugeService = new CentrifugeService();
