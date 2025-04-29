import Link from "next/link";
import MaxWidthContainer from "./max-width-container";
// import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-app-black paddingY">
      <MaxWidthContainer className="flex justify-between items-center">
        <div className="my-4">
          <p className="text-app-white md:text-lg hover:text-white cursor-pointer">
            +1 (213) 510-0621{" "}
          </p>
          <Link
            className="text-app-white md:text-lg hover:text-white"
            href={"mailto:info@d2corpintel.com"}
          >
            info@d2corpintel.com
          </Link>
        </div>

        <Link
          href={"/terms"}
          className="text-app-white hover:text-white md:text-lg"
        >
          Terms
        </Link>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
