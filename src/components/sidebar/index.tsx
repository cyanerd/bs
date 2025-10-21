import React from "react";
import { PresaleState } from "@/api/config";
import { WalletInfo } from "@/api/presale";
import { LoadingWrapper } from "@/components/common/loading-wrapper";
import { formatPrice } from "@/utils/format";
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
} from "./styles";

const formatBoost = (value: number): string => {
  return value > 0 ? `+${value}%` : "-";
};

type Props = {
  presaleState: PresaleState;
  walletInfo?: WalletInfo | null;
  loaded: boolean;
};

export const Sidebar = ({ presaleState, walletInfo, loaded }: Props) => {
  return (
    <SidebarRoot>
      <SidebarHeader>Inventory & Stats</SidebarHeader>

      <Card>
        <CardHeader>
          <HeaderText>Your deposit:</HeaderText>
          <HeaderValue>
            <LoadingWrapper loaded={true}>
              {walletInfo?.totalDeposited ?? 0} SOL
            </LoadingWrapper>
          </HeaderValue>
        </CardHeader>
        <List>
          <li>
            <Row>
              <RowText>Your WL tier:</RowText>
              <RowValue>
                {walletInfo !== null && <LoadingWrapper loaded={true}>
                  WL{walletInfo?.tier ?? 0}
                </LoadingWrapper>}
                {walletInfo === null && '-' }
              </RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Price:</RowText>
              <RowValue>
                <LoadingWrapper loaded={loaded}>
                  $ {formatPrice(walletInfo?.price ?? presaleState?.priceNoWL)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
        </List>
      </Card>

      <Card>
        <CardHeader>
          <HeaderText>Token Boost:</HeaderText>
          <HeaderValue>
            <LoadingWrapper loaded={true}>
              {(() => {
                const total =
                  (walletInfo?.boostSolflare ?? 0) +
                  (walletInfo?.boostBonk ?? 0) +
                  (walletInfo?.boostLucky ?? 0) +
                  (walletInfo?.boost1Hour ?? 0) +
                  (walletInfo?.boostCode ?? 0);
                return total > 0 ? `+${total}%` : "-";
              })()}
            </LoadingWrapper>
          </HeaderValue>
        </CardHeader>
        <List>
          <li>
            <Row>
              <RowText>SolFlare partner:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostSolflare ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Bonk Family:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostBonk ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Lucky number:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostLucky ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>1st Hour Buyer:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boost1Hour ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Code applied:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostCode ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
        </List>
      </Card>
    </SidebarRoot>
  );
};
