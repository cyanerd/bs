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
import { Hint } from "@/components/common/hint/Hint";

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
                {walletInfo !== null && (
                  <LoadingWrapper loaded={true}>
                    {walletInfo?.tier && walletInfo.tier > 0
                      ? `WL${walletInfo.tier}`
                      : "no WL"}
                  </LoadingWrapper>
                )}
                {walletInfo === null && "-"}
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
                  (walletInfo?.boostMagicEden ?? 0) +
                  (walletInfo?.boostPartner ?? 0) +
                  (walletInfo?.boost1Hour ?? 0) +
                  (walletInfo?.boostCode ?? 0);
                return total > 0 ? `+${total}%` : "-";
              })()}
            </LoadingWrapper>
          </HeaderValue>
        </CardHeader>
        <List>
          {!!walletInfo?.boostSolflare && <li>
            <Row>
              <RowText>Solflare special:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostSolflare ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>}
          {!!walletInfo?.boostMagicEden && <li>
            <Row>
              <RowText>Magic Eden special:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostMagicEden ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>}
          <li>
            <Row>
              <RowText>1st hour buyer:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boost1Hour ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Ref code applied:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostCode ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>
                Partner comms:
                <Hint>
                  <div>
                    Eligible communities:
                    <br />
                    <br /> @bodoggos
                    <br /> @Claynosaurz
                    <br /> @DegenApeAcademy
                    <br /> @FamousFoxFed
                    <br /> @GalacticGeckoSG
                    <br /> @MadLads
                    <br /> @MonkeDAO
                    <br /> @okaybears
                    <br /> @sagamonkes
                  </div>
                </Hint>
              </RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostPartner ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>BONK contributor:</RowText>
              <RowValue>
                <LoadingWrapper loaded={true}>
                  {formatBoost(walletInfo?.boostBonk ?? 0)}
                </LoadingWrapper>
              </RowValue>
            </Row>
          </li>
        </List>
      </Card>
    </SidebarRoot>
  );
};
