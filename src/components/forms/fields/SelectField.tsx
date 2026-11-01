"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import type { AnyFieldApi } from "@tanstack/react-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Option } from "@/types/option";
import { cn } from "@/lib/utils";

interface SelectFieldProps {
  field: AnyFieldApi;

  label?: string;
  options: Option[];

  placeholder?: string;
  allLabel?: string;

  required?: boolean;
  loading?: boolean;
  disabled?: boolean;

  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  field,
  label,
  options,
  placeholder = "Select option",
  allLabel,
  required = false,
  loading = false,
  disabled = false,
  className,
}) => {
  const tCommonStates = useTranslations("common.states");

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid} className={cn(className)}>
      {label && (
        <FieldLabel htmlFor={field.name}>
          {label}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}

      <Select
        name={field.name}
        value={field.state.value || undefined}
        disabled={disabled || loading}
        onValueChange={(value) => {
          field.handleChange(value);
        }}
        onOpenChange={(open) => {
          if (!open) {
            field.handleBlur();
          }
        }}
      >
        <SelectTrigger className="w-full rounded-xl">
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="size-4 shrink-0 animate-spin opacity-50" />

              <span className="truncate text-muted-foreground">
                {tCommonStates("loading")}
              </span>
            </div>
          ) : (
            <SelectValue placeholder={placeholder} />
          )}
        </SelectTrigger>

        <SelectContent
          position="popper"
          sideOffset={4}
          className="w-(--radix-select-trigger-width) max-h-60"
        >
          {allLabel && <SelectItem value="">{allLabel}</SelectItem>}

          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <span className="truncate">{option.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
};

export default SelectField;
