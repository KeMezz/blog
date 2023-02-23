import { graphql } from "gatsby";
import * as React from "react";
import BlogSelector from "../../components/blog-selector";
import Layout from "../../components/layout";
import PostPreview from "../../components/post-preview";
import Seo from "../../components/Seo";

interface PostsProps {
  data: Queries.RecentPostsQuery;
}

const Posts = ({ data }: PostsProps) => {
  return (
    <Layout>
      <div className="pt-6 pb-8">
        <BlogSelector value="recent" />
        <section className="grid grid-flow-dense justify-items-stretch grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {data.allMdx.nodes.map((mdx) => (
            <PostPreview
              key={mdx.frontmatter?.slug}
              emoji={mdx.frontmatter?.emoji!}
              title={mdx.frontmatter?.title!}
              excerpt={mdx.excerpt!}
              date={mdx.frontmatter?.date!}
              slug={mdx.frontmatter?.slug!}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query RecentPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY년 MM월 DD일")
          title
          slug
          emoji
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="블로그" />;

export default Posts;
