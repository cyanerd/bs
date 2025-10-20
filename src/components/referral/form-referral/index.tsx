import React, { useState, useEffect } from "react";
import { Flexbox } from "@/components/flexbox";
import { ReferralInput } from "../referral-input";

export const FormReferral = ({
  ready,
  handleReferralApply,
  currentReferralCode,
}: {
  ready: boolean;
  handleReferralApply: (refCode: string) => void;
  currentReferralCode?: string;
}) => {
  const [editingCode, setEditingCode] = useState(currentReferralCode || "");

  useEffect(() => {
    setEditingCode(currentReferralCode || "");
  }, [currentReferralCode]);

  return (
    <Flexbox $direction="column" $gap={16} $align="center">
      <h4 className="my-0">Know Ref Code?</h4>
      <ReferralInput
        value={editingCode}
        onChange={setEditingCode}
        disabled={!ready}
        disabledText="Please connect your wallet to apply your referral code"
        onApply={handleReferralApply}
        minLength={4}
        maxLength={8}
      />
    </Flexbox>
  );
};
