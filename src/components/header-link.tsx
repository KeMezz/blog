import React from "react";
import { Link } from "gatsby";

interface HeaderLinkProps {
  to: string;
  title: string;
  partiallyActive: boolean;
}

const HeaderLink = ({ to, title, partiallyActive }: HeaderLinkProps) => {
  return (
    <Link
      to={to}
      activeClassName="bg-white dark:bg-zinc-900 lg:bg-transparent lg:text-cyan-500 font-semibold shadow-sm lg:shadow-none"
      className="text-sm w-full h-full flex justify-center items-center lg:w-28"
      partiallyActive={partiallyActive}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
