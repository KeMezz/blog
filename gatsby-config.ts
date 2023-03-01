import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `dotCache`,
    siteUrl: `https://dotcache.netlify.app/`,
    description: `그때그때 캐싱해두고 필요할 때 꺼내먹는 블로그`,
    image: `/thumbnail.jpg`,
    icon: `/icon.png`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://dotcache.netlify.app/",
        sitemap: "https://dotcache.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embedder`,
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `mt-2`,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 600 },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`],
        web: [
          {
            name: `IBM Plex Sans KR`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap`,
          },
          {
            name: `Pacifico`,
            file: `https://fonts.googleapis.com/css2?family=Pacifico&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dotCache`,
        short_name: `dotCache`,
        start_url: `/`,
        lang: `ko`,
        icon: "src/images/icon.png",
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-W98KGFSHMK`,
        head: true,
        anonymize: false,
      },
    },
  ],
};

export default config;
