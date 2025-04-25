import { Facebook, Mail, Phone, InstagramIcon } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Socials = () => {
  const icons = [
    { icon: Phone, href: "tel:+2347065765637" },
    { icon: Mail, href: "mailto:info@ogsoftsolutions.com" },
    { icon: Facebook, href: "#https://www.facebook.com/ogsoftsolutions/" },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/ogsoftsolutionsltd/",
    },
  ];

  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      {icons.map((Icon, indx) => (
        <IconWrapper key={indx} href={Icon.href}>
          {
            <Icon.icon
              className={
                "size-7 bg-primary/90 hover:bg-primary rounded-full p-2 cursor-pointer text-white"
              }
            />
          }
        </IconWrapper>
      ))}
    </div>
  );
};

export default Socials;

interface Props extends PropsWithChildren {
  className?: string;
  href: string;
}
const IconWrapper = ({ className, children, href }: Props) => {
  return (
    <Link href={href} target="_blank" className={className}>
      {children}
    </Link>
  );
};
