import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface SeoProps {
  title: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
}

function Seo({ title, description, datePublished }: SeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);
  const siteTitle = `${title} | ${data.site?.siteMetadata?.title}`;
  return (
    <>
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={data.site?.siteMetadata?.siteUrl!} />
      <meta property="og:image" content={data.site?.siteMetadata?.image!} />
      <meta property="og:type" content="blog" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:image" content={data.site?.siteMetadata?.image!} />
      <meta
        name="description"
        content={description ?? data.site?.siteMetadata?.description!}
      />
      <meta
        property="og:description"
        content={description ?? data.site?.siteMetadata?.description!}
      />
      <meta
        name="twitter:description"
        content={description ?? data.site?.siteMetadata?.description!}
      />
      {datePublished ? <meta name="Date" content={datePublished} /> : null}
      <meta name="Author" content="hyeongjin" />
      <title>{siteTitle}</title>
    </>
  );
}

export default Seo;
