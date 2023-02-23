import React from "react";
import { Link } from "gatsby";
import { cls } from "../utils/cls";

interface HeaderLinkProps {
  to: string;
  title: string;
  active: boolean;
}

const HeaderLink = ({ to, title, active }: HeaderLinkProps) => {
  return (
    <Link
      to={to}
      className={cls(
        "text-sm w-full h-full flex justify-center items-center lg:w-28",
        active
          ? "bg-white dark:bg-zinc-900 lg:bg-transparent lg:text-cyan-500 font-semibold shadow-sm lg:shadow-none"
          : "bg-gray-200 dark:bg-zinc-700 lg:bg-transparent shadow-inner lg:shadow-none"
      )}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
