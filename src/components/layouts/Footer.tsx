import { ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return <footer className="flex items-center justify-center w-full h-28 mt-24">{children}</footer>;
};

export default Footer;
