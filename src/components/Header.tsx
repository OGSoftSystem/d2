"use client";

import React, { ComponentProps, useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ArrowUp, Timer, X } from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import MaxWidthContainer from "./max-width-container";
// import Socials from "./Socials";

const menus = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact-us", title: "Contact" },
  // { path: "/auth/sign-in", title: "Login" },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
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
    <header className="sticky top-0 bg-white z-50">
      <TopBar />

      <MaxWidthContainer className="flex items-center justify-between h-14 relative flex-1">
        <Link className="flex-[0.3]" href={"/"}>
          <h1>LOGO</h1>
        </Link>

        <div className="flex-[0.4] flex justify-center">
          <DesktopNavbar />
        </div>

        <div className="hidden md:flex items-center justify-end space-x-2 text-muted-foreground font-[400] font-rubik flex-[0.3]">
          {true ? (
            <form
            // action={async () => {
            //   await signOutUser();
            // }}
            >
              <button
                type="submit"
                className="text-muted-foreground font-rubik"
              >
                Logout
              </button>
            </form>
          ) : (
            <Link href={"/auth/sign-in"} className="hover:text-primary">
              <span className="flex space-x-1">
                <p>Login</p>
                {/* <LogIn className="size-7" /> */}
              </span>
            </Link>
          )}
        </div>

        {/* Menu hamburger */}
        <div className="flex items-center space-x-2">
         

          <div className="md:hidden">
            {!toggle ? (
              <HamburgerMenuIcon
                className="size-7 cursor-pointer text-accent-foreground"
                onClick={() => setToggle(true)}
              />
            ) : (
              <X
                onClick={() => setToggle(false)}
                className="size-7 cursor-pointer text-accent-foreground"
              />
            )}
          </div>
        </div>

        <MobileNavbar setToggle={setToggle} onClick={() => setToggle(false)} />

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

const TopBar = () => {
  return (
    <MaxWidthContainer className="border-b ">
      <div className="flex items-center justify-between py-1">
        <Link
          href={"#book-appointment"}
          className="text-muted-foreground hover:text-primary"
        >
          <Timer className="size-7" />
          {/* Book an appointment */}
        </Link>
        {/* <Socials /> */}
      </div>
    </MaxWidthContainer>
  );
};

const DesktopNavbar = () => {
  return (
    <nav className="space-x-8 hidden md:block">
      {menus.map((menu) => {
        return (
          <NavItem key={menu.title} href={menu.path}>
            {menu.title}
          </NavItem>
        );
      })}
    </nav>
  );
};

const MobileNavbar = ({
  onClick,
  setToggle,
}: {
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const { data: session } = useSession();
  return (
    <nav className="flex flex-col space-y-6 absolute top-14 left-0 right-0 bg-card h-screen animate-slide-down p-4 z-50">
      {menus.map((menu) => {
        return (
          <NavItem onClick={onClick} key={menu.title} href={menu.path}>
            {menu.title}
          </NavItem>
        );
      })}
      {true ? (
        <NavItem href={"/auth/sign-in"}>LogIn</NavItem>
      ) : (
        <div
          onClick={async () => {
            setToggle(false);
            // await signOutUser();
          }}
          className="text-muted-foreground font-rubik ml-2"
        >
          Logout
        </div>
      )}
    </nav>
  );
};

const NavItem = (props: Omit<ComponentProps<typeof Link>, "className">) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "py-2 mx-2 hover:text-primary text-muted-foreground font-rubik font-[400]",
        props.href === pathname && "border-b-4 border-primary w-fit",
        props.href === pathname && "hover:text-muted-foreground"
      )}
    >
      {props.children}
    </Link>
  );
};
