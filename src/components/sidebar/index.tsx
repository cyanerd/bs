import React from "react";
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

export const Sidebar = () => {
  return (
    <SidebarRoot>
      <SidebarHeader>Inventory & Stats</SidebarHeader>

      <Card>
        <CardHeader>
          <HeaderText>Token Price:</HeaderText>
          <HeaderValue>$ 0.00023</HeaderValue>
        </CardHeader>
        <List>
          <li>
            <Row>
              <RowText>Your WL tier:</RowText>
              <RowValue>WL0</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Your price:</RowText>
              <RowValue>$ 0.003</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Public price:</RowText>
              <RowValue>$ 0.004</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>TGE price:</RowText>
              <RowValue>$ 0.0045</RowValue>
            </Row>
          </li>
        </List>
      </Card>

      <Card>
        <CardHeader>
          <HeaderText>Token Boost:</HeaderText>
          <HeaderValue>+9%</HeaderValue>
        </CardHeader>
        <List>
          <li>
            <Row>
              <RowText>SolFlare partner:</RowText>
              <RowValue>+2%</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Bonk Family:</RowText>
              <RowValue>+3%</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Lucky number:</RowText>
              <RowValue>+1%</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>1st Hour Buyer:</RowText>
              <RowValue>+2%</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Code applied:</RowText>
              <RowValue>+1%</RowValue>
            </Row>
          </li>
        </List>
      </Card>

      <Card>
        <CardHeader>
          <HeaderText>$STRAND to Receive:</HeaderText>
          <HeaderValue>978,000</HeaderValue>
        </CardHeader>

        <List>
          <li>
            <Row>
              <RowText>Total deposited:</RowText>
              <RowValue>200 SOL</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Base amount:</RowText>
              <RowValue>888,000</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Bonus amount:</RowText>
              <RowValue>+65,000</RowValue>
            </Row>
          </li>
        </List>
      </Card>
    </SidebarRoot>
  );
};
