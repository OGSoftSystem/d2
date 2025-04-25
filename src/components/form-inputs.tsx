/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX, ReactNode, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import {
  EyeClosedIcon,
} from "lucide-react";
import { EyeOpenIcon } from "@radix-ui/react-icons";
// import { CustomButton } from "./Pressable";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import Spinner from "./spinner";

export const CustomFormInput = ({
  name,
  control,
  placeholder,
  className,
  label,
  // icon,
  disabled,
}: {
  name: string;
  label?: string;
  control: Control<any>;
  placeholder: string;
  className?: string;
  // icon?: ReactNode;
  disabled?: boolean;
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              {label && (
                <FormLabel className="capitalize text-primary-foreground text-xl">
                  {label}
                </FormLabel>
              )}

              <div className="relative">
                {/* {icon && (
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground">
                    {icon}
                  </div>
                )} */}
                <Input
                  {...field}
                  type={"text"}
                  placeholder={placeholder}
                  className={cn(
                    "rounded-md focus:border-none text-primary-foreground",
                    // icon ? "pl-10" : "",
                    className
                  )}
                  disabled={disabled}
                />
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export const CustomFormPasswordInput = ({
  name,
  control,
  placeholder,
  className,
  type,
  showIcon,
  label,
  icon,
  disabled,
}: {
  name: string;
  label?: string;
  control: Control<any>;
  placeholder: string;
  className?: string;
  type: "text" | "password" | "email" | "tel";
  showIcon?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormField
      name={name}
      control={control}
      render={({
        field,
      }: {
        field: { value: any; onChange: (value: any) => void };
      }) => (
        <FormItem>
          <FormControl>
            <div>
              {label && (
                <FormLabel className="capitalize text-muted-foreground">
                  {label}
                </FormLabel>
              )}

              <div className="relative">
                {icon && (
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    {icon}
                  </div>
                )}
                <Input
                  {...field}
                  type={
                    !isOpen && showIcon && type === "password"
                      ? "password"
                      : "text"
                  }
                  placeholder={placeholder}
                  className={cn(
                    "mb-4 rounded-md",
                    icon ? "pl-10" : "",
                    className
                  )}
                  disabled={disabled}
                />

                {/* Show/hide password icon */}
                {showIcon && type === "password" && (
                  <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {isOpen ? (
                      <EyeClosedIcon className="size-5 text-muted-foreground" />
                    ) : (
                      <EyeOpenIcon className="size-5 text-muted-foreground" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const CustomFormNumberInput = ({
  name,
  control,
  placeholder,
  className,
  type,
  label,
  max,
}: {
  name: string;
  type: string;
  label?: string;
  control: Control<any>;
  placeholder: string;
  className?: string;
  showIcon?: boolean;
  max?: number;
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <FormLabel className="capitalize text-muted-foreground">
                {label || name}
              </FormLabel>

              <div className="relative">
                <Input
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  value={field.value || ""} // Ensure value is always a string
                  onChange={(e) => {
                    // Handle number type separately
                    if (type === "number") {
                      const value = e.target.value;
                      // Convert to number if the input is not empty
                      field.onChange(value === "" ? null : Number(value));
                    } else {
                      field.onChange(e.target.value);
                    }
                  }}
                  className={cn("mb-4 rounded-md", className)}
                  min={1}
                  max={max}
                />
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const CustomFormTextArea = ({
  name,
  control,
  placeholder,
  className,
  formWidth,
  label,
}: {
  name: string;
  control: Control<any>;
  placeholder: string;
  className?: string;
  formWidth?: string;
  label?: string;
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn("w-full", formWidth)}>
          <FormControl>
            <div>
              <FormLabel className="capitalize text-muted-foreground">
                {label ? label : ""}
              </FormLabel>
              <Textarea
                {...field}
                placeholder={placeholder}
                value={field.value}
                onChange={field.onChange}
                // rows={5}
                className={cn("rounded-md", className)}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const CustomDate = ({
  name,
  control,
  placeholder,
  className,
  label,
}: {
  name: string;
  control: Control<any>;
  placeholder: string;
  className?: string;
  label?: string;
  showIcon?: boolean;
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <FormLabel className="capitalize text-muted-foreground">
                {label ? label : name}
              </FormLabel>

              <div className="relative">
                <Input
                  {...field}
                  type="date"
                  placeholder={placeholder}
                  value={field.value}
                  onChange={field.onChange}
                  className={cn("mb-4 rounded-md", className)}
                />
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const CustomTime = ({
  name,
  control,
  placeholder,
  className,
  label,
}: {
  name: string;
  control: Control<any>;
  placeholder: string;
  label?: string;
  className?: string;
  showIcon?: boolean;
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <FormLabel className="capitalize text-muted-foreground">
                {label ? label : name}
              </FormLabel>

              <div className="relative">
                <Input
                  {...field}
                  type="time"
                  placeholder={placeholder}
                  value={field.value}
                  onChange={field.onChange}
                  className={cn("mb-4 rounded-md", className)}
                />
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const CustomSubmitBtn = ({
  title,
  isSubmitting,
  spinnerClassName,
  className,
}: {
  title: string;
  isSubmitting: boolean;
  spinnerClassName?: string;
  className?: string;
}) => {
  return (
    <Button
      variant={"default"}
      type="submit"
      className={cn(
        "flex items-center gap-1 font-poppins font-bold",
        className,
        isSubmitting && "cursor-not-allowed"
      )}
      disabled={isSubmitting}
    >
      {isSubmitting && (
        <Spinner className={cn("h-4 w-4 animate-spin", spinnerClassName)} />
      )}
      {title}
    </Button>
  );
};

export const JustSubmitBtn = ({
  title,
  isSubmitting,
  spinnerClassName,
  className,
}: {
  title: string;
  isSubmitting: boolean;
  spinnerClassName: string;
  className: string;
}) => {
  return (
    <Button
      type="submit"
      variant={"default"}
      className={cn(className, isSubmitting && "cursor-not-allowed")}
    >
      {isSubmitting ? <Spinner className={spinnerClassName} /> : title}
    </Button>
  );
};

export const CustomSelect = ({
  name,
  control,
  className,
  items,
  label,
}: {
  name: string;
  control: Control<any>;
  className?: string;
  label?: string;
  items: { title: string; value: string }[];
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <FormLabel className="capitalize text-muted-foreground">
                {label || name}
              </FormLabel>

              <div>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={`${label}`}
                      className="text-muted-foreground font-rubik"
                    />
                  </SelectTrigger>
                  <SelectContent className={cn("mb-4 z-10", className)}>
                    {items.map((i) => (
                      <SelectItem key={i.value} value={i.value}>
                        {i.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const JustSelect = ({
  Icon,
  onValueChange,
  items,
  title,
  className,
  label,
}: {
  Icon?: JSX.Element;
  onValueChange: (e: string) => void;
  items: { title: string; value: string }[];
  title: string;
  className?: string;
  label?: string;
}) => (
  <Select onValueChange={onValueChange}>
    <p className="p-text">{label}</p>
    <SelectTrigger className={className}>
      {Icon}
      <SelectValue placeholder={title} />
    </SelectTrigger>
    <SelectContent>
      {items.map((u: { title: string; value: string }) => {
        return (
          <SelectItem key={u.title} value={u.value} className="w-full">
            {u.title}
          </SelectItem>
        );
      })}
    </SelectContent>
  </Select>
);

export const CustomCheckBox = ({
  name,
  title,
  control,
  className,
}: {
  name: string;
  title: string;
  control: Control<any>;
  className?: string;
}) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex gap-2 my-2 ">
              <FormLabel className="capitalize text-muted-foreground">
                {title}
              </FormLabel>

              <Checkbox
                onCheckedChange={field.onChange}
                checked={field.value}
                className={className}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
