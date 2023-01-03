import { graphql, Link } from "gatsby";
import React, { ReactElement } from "react";
import Layout from "../../components/Layout";
import { FaRegCalendar } from "@react-icons/all-files/fa/FaRegCalendar";
import Seo from "../../components/Seo";
import TableOfContents from "../../components/TableOfContents";

interface PostDetailProps {
  data: Queries.PostDetailQuery;
  children: ReactElement | ReactElement[];
}

const PostDetail = ({ data, children }: PostDetailProps) => {
  const title = data.mdx?.frontmatter?.title;
  console.log(data.mdx?.tableOfContents!.items);
  return (
    <Layout disablePaddings>
      <section className="pb-14">
        <div className="flex flex-col gap-6 text-2xl text-center px-4 py-16">
          <span className="text-5xl">{data.mdx?.frontmatter?.emoji}</span>
          <div className="flex flex-wrap justify-center items-center gap-2 px-4">
            {data.mdx?.frontmatter?.tags?.map((tag, i) => (
              <p
                className="text-xs px-3 py-1 bg-white dark:bg-zinc-900 rounded-full"
                key={i}
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr,_300px] gap-6 items-start">
          <article className="bg-white dark:bg-zinc-900 p-6 py-10 lg:p-12 xl:rounded-xl">
            <div className="mb-6">
              <h1 className="border-b-2 pb-4 text-2xl font-semibold mb-4">
                {title}
              </h1>
              <div className="flex items-center gap-2 text-gray-500">
                <FaRegCalendar className="text-sm" />
                <p className="text-xs">{data.mdx?.frontmatter?.date}</p>
              </div>
            </div>
            <div className="prose prose-sm lg:prose-base prose-h1:text-3xl prose-h1:pt-8 prose-h1:mb-0 prose-h2:mt-10 max-w-none dark:prose-invert prose-headings:before:text-sm lg:prose-headings:before:text-lg prose-headings:before:text-zinc-200 dark:prose-headings:before:text-zinc-600 prose-headings:before:mr-2 prose-h1:before:content-['#'] prose-h2:before:content-['##'] prose-h3:before:content-['###'] prose-h4:before:content-['####'] prose-h5:before:content-['#####'] prose-h6:before:content-['######']">
              {children}
            </div>
          </article>
          {/* @ts-ignore */}
          <TableOfContents tableOfContents={data.mdx?.tableOfContents.items} />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query PostDetail($frontmatter__slug: Int) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        emoji
        slug
        title
        tags
      }
      tableOfContents
    }
  }
`;

export const Head = ({ data }: { data: Queries.PostDetailQuery }) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);

export default PostDetail;
