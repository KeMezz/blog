import { graphql } from "gatsby";
import React, { ReactElement } from "react";
import Layout from "../../components/Layout";

interface PostDetailProps {
  data: Queries.PostDetailQuery;
  children: ReactElement | ReactElement[];
}

const PostDetail = ({ data, children }: PostDetailProps) => {
  console.log(data);
  return <Layout>{children}</Layout>;
};

export const query = graphql`
  query PostDetail($frontmatter__slug: Int) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        emoji
        slug
        title
      }
      excerpt
    }
  }
`;

export default PostDetail;
