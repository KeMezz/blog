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
    <div className="pl-6 mt-6 border-l-4 border-cyan-500 hidden xl:flex sticky top-8 flex-col space-y-2">
      {/* <h1 className="font-bold mb-2 text-lg">목차</h1> */}
      {tableOfContents.map((h1, index) => (
        <div key={index} className="text-sm">
          <Link to={h1.url}>
            <h1 id={h1.url} className="mb-1">
              {h1.title}
            </h1>
          </Link>
          {h1?.items
            ? h1?.items.map((h2, index) => (
                <Link to={h2.url} key={index}>
                  <h2 id={h2.url} className="ml-4 leading-7">
                    {h2.title}
                  </h2>
                </Link>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
