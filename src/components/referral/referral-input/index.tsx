import React from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
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

  const currentValue = value !== undefined ? value : internalValue;

  const effectiveMax = maxLength ?? 4;
  const effectiveMin = minLength ?? effectiveMax;

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
      currentValue.length <= effectiveMax;
    if (onApply && meetsMin) {
      onApply(currentValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const meetsMin =
        currentValue.length >= effectiveMin &&
        currentValue.length <= effectiveMax;
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
        disabledText={disabled ? disabledText : (currentValue.length < effectiveMin ? `Min ${effectiveMin} characters` : `Max ${effectiveMax} characters`)}
        disabled={
          disabled ||
          currentValue.length < effectiveMin ||
          currentValue.length > effectiveMax
        }
      >
        Apply
      </Button>
    </Container>
  );
};
