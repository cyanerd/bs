import React from 'react';
import { PresaleState } from '@/api/config';
import { WalletInfo } from '@/api/presale';
import {
  SidebarRoot,
  SidebarHeader,
  Card,
  CardHeader,
  HeaderText,
  HeaderValue,
  List,
  Row,
  RowText,
  RowValue,
} from './styles';

const formatBoost = (value: number): string => {
  return value > 0 ? `+${value}%` : '-';
};

type Props = {
  presaleState: PresaleState;
  walletInfo?: WalletInfo | null;
};

export const Sidebar = ({ presaleState, walletInfo }: Props) => {
  return (
    <SidebarRoot>
      <SidebarHeader>Inventory & Stats</SidebarHeader>

      <Card>
        <CardHeader>
          <HeaderText>Your deposit:</HeaderText>
          <HeaderValue>{walletInfo?.totalDeposited ?? 0} SOL</HeaderValue>
        </CardHeader>
        <List>
          <li>
            <Row>
              <RowText>Your WL tier:</RowText>
              <RowValue>WL{walletInfo?.tier ?? 0}</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Your price:</RowText>
              <RowValue>$ {(walletInfo?.price ?? presaleState.publicPrice).toFixed(5)}</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Public price:</RowText>
              <RowValue>$ {presaleState.publicPrice.toFixed(5)}</RowValue>
            </Row>
          </li>
        </List>
      </Card>

      <Card>
        <CardHeader>
          <HeaderText>Token Boost:</HeaderText>
          <HeaderValue>
            {(() => {
              const total = (walletInfo?.boostSolflare ?? 0) + (walletInfo?.boostBonk ?? 0) + (walletInfo?.boostLucky ?? 0) + (walletInfo?.boost1Hour ?? 0) + (walletInfo?.boostCode ?? 0);
              return total > 0 ? `+${total}%` : '-';
            })()}
          </HeaderValue>
        </CardHeader>
        <List>
          <li>
            <Row>
              <RowText>SolFlare partner:</RowText>
              <RowValue>{formatBoost(walletInfo?.boostSolflare ?? 0)}</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Bonk Family:</RowText>
              <RowValue>{formatBoost(walletInfo?.boostBonk ?? 0)}</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Lucky number:</RowText>
              <RowValue>{formatBoost(walletInfo?.boostLucky ?? 0)}</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>1st Hour Buyer:</RowText>
              <RowValue>{formatBoost(walletInfo?.boost1Hour ?? 0)}</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Code applied:</RowText>
              <RowValue>{formatBoost(walletInfo?.boostCode ?? 0)}</RowValue>
            </Row>
          </li>
        </List>
      </Card>
    </SidebarRoot>
  );
};
