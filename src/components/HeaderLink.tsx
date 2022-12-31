import React from "react";
import { Link } from "gatsby";

interface HeaderLinkProps {
  to: string;
  title: string;
}

const HeaderLink = ({ to, title }: HeaderLinkProps) => {
  return <Link to={to}>{title}</Link>;
};

export default HeaderLink;
