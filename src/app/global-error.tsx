"use client";

import MaxWidthContainer from "@/components/max-width-container";
import { Button } from "@/components/ui/button";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="bg-app-black">
      <MaxWidthContainer className="flex flex-col items-center justify-center min-h-svh w-full">
        <h1 className="text-app-white text-2xl md:text-4xl">
          The page you requested does not exit.
        </h1>
        <p>{error.message}</p>
        <Button
          onClick={() => reset()}
          className="bg-app-white text-accent-foreground mt-6 cursor-pointer"
          type="button"
        >
          Retry
        </Button>
      </MaxWidthContainer>
    </div>
  );
};

export default GlobalError;
