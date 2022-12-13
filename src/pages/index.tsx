import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <main className="bg-slate-600 py-10">
        <h1>hello</h1>
      </main>
    </Layout>
  );
};

export const Head = () => <Seo title="블로그" />;

export default IndexPage;
