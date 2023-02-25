import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

interface HeaderLinkProps {
  to: string;
  title: string;
  partiallyActive: boolean;
}

const HeaderLink = ({ to, title, partiallyActive }: HeaderLinkProps) => {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const changeColorScheme = () => setIsDark(colorScheme.matches);
    colorScheme.addEventListener("change", changeColorScheme);
    return () => {
      colorScheme.removeEventListener("change", changeColorScheme);
    };
  }, [colorScheme]);

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
