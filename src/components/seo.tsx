import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface SeoProps {
  title: string;
  datePublished?: string;
  dateModified?: string;
  showComments?: boolean;
}

function Seo({ title, showComments }: SeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      {showComments ? (
        <script
          src="https://giscus.app/client.js"
          data-repo="KeMezz/blog"
          data-repo-id="R_kgDOInDzBw"
          data-category="Comments"
          data-category-id="DIC_kwDOInDzB84CTbpU"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="preferred_color_scheme"
          data-lang="ko"
          data-loading="lazy"
          crossOrigin="anonymous"
          async
        />
      ) : null}
      <meta property="og:title" content={title} />
      <title>
        {title} | {data.site?.siteMetadata?.title}
      </title>
    </>
  );
}

export default Seo;
