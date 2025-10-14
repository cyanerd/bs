import React from "react";
import { Flexbox } from "@/components/flexbox";
import { ReferralInput } from "../referral-input";

export const FormReferral = ({
  ready,
  handleReferralApply,
}: {
  ready: boolean;
  handleReferralApply: (refCode: string) => void;
}) => {
  return (
    <Flexbox $direction="column" $gap={16} $align="center">
      <h4 className="my-0">Know Ref Code?</h4>
      <ReferralInput
        disabled={!ready}
        disabledText="Please connect your wallet to apply your referral code"
        onApply={handleReferralApply}
        minLength={4}
        maxLength={4}
      />
    </Flexbox>
  );
};
