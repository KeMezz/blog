import { Link } from "gatsby";
import React from "react";

interface TocProps {
  tableOfContents: {
    url: string;
    title: string;
    items?: {
      url: string;
      title: string;
    }[];
  }[];
}

const TableOfContents = ({ tableOfContents }: TocProps) => {
  return (
    <div
      id="toc"
      className="pl-4 my-6 border-l-4 border-cyan-500 hidden lg:flex sticky top-8 flex-col space-y-2"
    >
      {tableOfContents.map((h1, index) => (
        <div key={index} className="text-xs xl:text-sm">
          <Link to={h1.url}>
            <h1 className={`mb-1 ${h1.url}`}>{h1.title}</h1>
          </Link>
          {h1?.items
            ? h1?.items.map((h2, index) => (
                <Link to={h2.url} key={index}>
                  <h2 className={`ml-4 leading-7 ${h2.url}`}>{h2.title}</h2>
                </Link>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
