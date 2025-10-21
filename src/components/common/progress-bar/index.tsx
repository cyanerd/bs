import React from "react";
import { BarWrapper, Bar, Fill, InBarText, BottomRow } from "./styles";
import { LoadingWrapper } from "@/components/common/loading-wrapper";

type Props = {
  value: number; // 0 - 100
  label?: React.ReactNode; // text over bar (left bottom inside)
  leftLabel?: React.ReactNode; // text under bar left
  rightLabel?: React.ReactNode; // text under bar right
  className?: string;
  style?: React.CSSProperties;
  loaded: boolean;
};

export const ProgressBar: React.FC<Props> = ({
  value,
  label,
  leftLabel,
  rightLabel,
  className,
  style,
  loaded,
}) => {
  return (
    <BarWrapper className={className} style={style}>
      <Bar>
        {label && <InBarText>{label}</InBarText>}
        <Fill $value={value} />
      </Bar>
      {(leftLabel || rightLabel) && (
        <BottomRow>
          <LoadingWrapper loaded={loaded}>{leftLabel}</LoadingWrapper>
          <div>{rightLabel}</div>
        </BottomRow>
      )}
    </BarWrapper>
  );
};
