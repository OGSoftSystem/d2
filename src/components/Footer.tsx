import Link from "next/link";
import MaxWidthContainer from "./max-width-container";
// import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-app-black paddingY">
      <MaxWidthContainer className="flex justify-between">
        <div className="my-4">
          <p className="text-app-white md:text-xl">+1 (213) 510-0621 </p>
          <Link
            className="text-app-white md:text-xl"
            href={"mailto:info@d2corpintel.com"}
          >
            info@d2corpintel.com
          </Link>
        </div>

        <div className="flex space-x-3 items-center">
          <p className="text-app-white">Terms</p>
          <p className="text-app-white">Privacy</p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
