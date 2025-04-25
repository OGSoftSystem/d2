import { cn } from "@/lib/utils";
import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Spinner = ({ className }: { className: string }) => {
  return <ImSpinner2 className={cn("size-4 animate-spin", className)} />;
};

export default Spinner;
