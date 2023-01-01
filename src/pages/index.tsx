import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <div className="h-96">모든 블로그 컨텐츠의 살짝씩 미리보기 제공</div>
    </Layout>
  );
};

export const Head = () => <Seo title="블로그" />;

export default IndexPage;
