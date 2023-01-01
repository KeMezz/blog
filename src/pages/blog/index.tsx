import * as React from "react";
import Layout from "../../components/Layout";
import PostPreview from "../../components/PostPreview";
import Seo from "../../components/Seo";

const Blog = () => {
  return (
    <Layout>
      <div className="py-6">
        <select className="border-none bg-transparent font-semibold text-lg focus:ring-transparent mb-2">
          <option>최근에 올라온 포스트</option>
          <option>태그별로 보기</option>
          <option>시리즈 모아보기</option>
        </select>
        <section className="flex flex-col gap-3">
          {Array.from({ length: 10 }, (_, i) => {
            return <PostPreview key={i} />;
          })}
        </section>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="블로그" />;

export default Blog;
