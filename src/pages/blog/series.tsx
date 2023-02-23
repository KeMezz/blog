import { graphql } from "gatsby";
import * as React from "react";
import BlogSelector from "../../components/blog-selector";
import Layout from "../../components/Layout";
import PostPreview from "../../components/post-preview";
import Seo from "../../components/Seo";

interface PostsProps {
  data: Queries.RecentPostsQuery;
}

const Series = () => {
  return (
    <Layout>
      <div className="pt-6 pb-8">
        <BlogSelector value="series" />
        <section className="grid grid-flow-dense justify-items-stretch grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"></section>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="블로그" />;

export default Series;
