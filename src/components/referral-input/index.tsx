import React from "react";
import { ApplyButton, Container, Input } from "./styles";

type RefInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onApply?: (value: string) => void;
  disabled?: boolean;
  minLength?: number; // minimum characters required to allow Apply
  maxLength?: number; // maximum characters allowed in the input
};

export const ReferralInput: React.FC<RefInputProps> = ({
  placeholder = "XXXX",
  value,
  onChange,
  onApply,
  disabled,
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
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        maxLength={effectiveMax}
      />
      <ApplyButton
        onClick={handleApply}
        disabled={
          disabled ||
          currentValue.length < effectiveMin ||
          currentValue.length > effectiveMax
        }
      >
        Apply
      </ApplyButton>
    </Container>
  );
};
