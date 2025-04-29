import MaxWidthContainer from "@/components/max-width-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-app-black">
      <MaxWidthContainer className="flex flex-col items-center justify-center min-h-svh w-full">
        <h1 className="text-app-white text-2xl md:text-4xl">
          The page you requested does not exit.
        </h1>
        <Button
          asChild
          className="bg-app-white text-accent-foreground mt-6 cursor-pointer"
          type="button"
        >
          <Link href="/"> Go back</Link>
        </Button>
      </MaxWidthContainer>
    </div>
  );
};

export default NotFound;
