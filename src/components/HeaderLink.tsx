import React from "react";
import { Link } from "gatsby";

interface HeaderLinkProps {
  to: string;
  title: string;
}

const HeaderLink = ({ to, title }: HeaderLinkProps) => {
  return (
    <Link
      to={to}
      className="text-sm w-full h-full flex justify-center items-center lg:w-28"
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
