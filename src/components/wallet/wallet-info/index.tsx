import React from "react";
import { Container, Item, Value } from "./styles";

type WalletInfoProps = {
  balanceSol: number | string | null;
  whitelist: string;
  price: number;
  visible?: boolean;
};

export const WalletInfo: React.FC<WalletInfoProps> = ({
  balanceSol,
  whitelist,
  price,
  visible,
}) => {
  const isVisible = visible ?? Boolean(balanceSol);

  return (
    <Container $visible={isVisible}>
      <Item>
        Balance: <Value>{balanceSol ?? "—"}</Value> SOL
      </Item>
      <Item>
        Your WL: <Value>{whitelist}</Value>
      </Item>
      <Item>
        Price: <Value>{price} SOL</Value>
      </Item>
    </Container>
  );
};

export default WalletInfo;
