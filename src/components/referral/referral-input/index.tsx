import React from "react";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Container } from "./styles";

type RefInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onApply?: (value: string) => void;
  disabled?: boolean;
  disabledText?: string;
  minLength?: number; // minimum characters required to allow Apply
  maxLength?: number; // maximum characters allowed in the input
};

export const ReferralInput: React.FC<RefInputProps> = ({
  placeholder = "",
  value,
  onChange,
  onApply,
  disabled,
  disabledText,
  minLength,
  maxLength,
}) => {
  const [internalValue, setInternalValue] = React.useState("");

  const currentValue = String(value !== undefined ? value : internalValue);

  const effectiveMax = maxLength ?? 8;
  const effectiveMin = minLength ?? 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value.slice(0, effectiveMax);
    if (onChange) {
      onChange(next);
    } else {
      setInternalValue(next);
    }
  };

  const handleApply = () => {
    const meetsMin =
      currentValue.length >= effectiveMin &&
      currentValue.length <= effectiveMax &&
      currentValue.trim().length > 0;
    if (onApply && meetsMin) {
      onApply(currentValue.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const meetsMin =
        currentValue.length >= effectiveMin &&
        currentValue.length <= effectiveMax &&
        currentValue.trim().length > 0;
      if (!meetsMin || disabled) {
        e.preventDefault();
        return;
      }
      handleApply();
    }
  };

  return (
    <Container>
      <Input
        name="referralCode"
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={effectiveMax}
      />
      <Button
        $background="#333"
        $color="#fff"
        onClick={handleApply}
        disabledText={
          disabled
            ? disabledText
            : currentValue.trim().length === 0
            ? "Enter referral code"
            : currentValue.length < effectiveMin
            ? `Min ${effectiveMin} characters`
            : `Max ${effectiveMax} characters`
        }
        disabled={
          disabled ||
          currentValue.trim().length === 0 ||
          currentValue.length < effectiveMin ||
          currentValue.length > effectiveMax
        }
      >
        Apply
      </Button>
    </Container>
  );
};
