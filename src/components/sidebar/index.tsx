import React from 'react';
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

export const Sidebar = () => {
  return (
    <SidebarRoot>
      <SidebarHeader>Inventory & Stats</SidebarHeader>

      <Card>
        <CardHeader>
          <HeaderText>Your deposit:</HeaderText>
          <HeaderValue>200 SOL</HeaderValue>
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
              <RowValue>$ 0.00023</RowValue>
            </Row>
          </li>
          <li>
            <Row>
              <RowText>Public price:</RowText>
              <RowValue>$ 0.00038</RowValue>
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
    </SidebarRoot>
  );
};
