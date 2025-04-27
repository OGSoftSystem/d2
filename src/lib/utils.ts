import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleError(error: unknown): string {

  let message = "An unknown error occurred";

  if (typeof error === "string") {
    message = JSON.stringify(error);
  }

  return message;
}
