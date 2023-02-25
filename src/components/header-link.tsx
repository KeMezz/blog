import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";

interface HeaderLinkProps {
  to: string;
  title: string;
  partiallyActive: boolean;
}

const HeaderLink = ({ to, title, partiallyActive }: HeaderLinkProps) => {
  const isDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
  return (
    <Link
      to={to}
      className="text-sm w-full h-full flex justify-center items-center lg:w-28 bg-gray-200 dark:bg-zinc-700 lg:bg-transparent shadow-inner lg:shadow-none"
      activeClassName="lg:bg-transparent lg:text-cyan-500 font-semibold shadow-none shadow-sm lg:shadow-none"
      partiallyActive={partiallyActive}
      activeStyle={{ backgroundColor: isDark ? "#18181b" : "#ffffff" }}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
