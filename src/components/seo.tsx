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
        }
      }
    }
  `);
  const siteTitle = `${title} | ${data.site?.siteMetadata?.title}`;
  const summaryImageUrl = `https://raw.githubusercontent.com/KeMezz/kemezz-developer-blog/main/src/images/meta/og-thumbnail.jpg?token=GHSAT0AAAAAAB5YLYA2GE5TVID7SNGZLEN6Y77LUVA`;
  return (
    <>
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={data.site?.siteMetadata?.siteUrl!} />
      <meta property="og:image" content={summaryImageUrl} />
      <meta property="og:type" content="blog" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:image" content={summaryImageUrl} />
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
