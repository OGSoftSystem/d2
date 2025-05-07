import Link from "next/link";
import MaxWidthContainer from "./max-width-container";
// import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-app-black paddingY">
      <MaxWidthContainer className="flex justify-between items-center">
        <div className="space-y-2 flex flex-col">
          <Link
            href={"tel:+12135100621"}
            className="text-app-white md:text-lg hover:text-white cursor-pointer"
          >
            +1 (213) 510-0621
          </Link>
          <Link
            className="text-app-white md:text-lg hover:text-white"
            href={"mailto:info@d2corpintel.com"}
          >
            info@d2corpintel.com
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Link
            href={"/terms"}
            className="text-app-white hover:text-white md:text-lg"
          >
            Terms of use
          </Link>
          <Link
            href={"/"}
            className="text-app-white hover:text-white md:text-lg"
          >
            Privacy & Policies
          </Link>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
