import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import PostPreview from "../../components/post-preview";
import Seo from "../../components/seo";

interface PostsProps {
  data: Queries.RecentPostsQuery;
}

const Posts = ({ data }: PostsProps) => {
  return (
    <Layout>
      <div className="pt-6 pb-8">
        <select className="border-none bg-transparent font-semibold text-lg lg:text-xl focus:ring-transparent mb-2">
          <option value="recent">최근에 올라온 포스트</option>
          <option value="tag" disabled>
            태그별로 보기
          </option>
          <option value="series" disabled>
            시리즈 모아보기
          </option>
        </select>
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
