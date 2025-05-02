"use client";

import { cn } from "@/lib/utils";
import { ArrowUp} from "lucide-react";
import MaxWidthContainer from "./max-width-container";
import { useEffect, useState } from "react";

const Header = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>

      <MaxWidthContainer className="relative ">
       

        {/* Scroll to top */}
        <div
          className={cn(
            "size-8 hidden items-center justify-center rounded-full fixed bottom-5 right-5 bg-primary/70 hover:bg-primary font-bold font-rubik cursor-pointer z-30",
            showBtn && "flex"
          )}
          onClick={scrollToTop}
        >
          <ArrowUp className="w-6 text-white" />
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;

