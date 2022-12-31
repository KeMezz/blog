import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center w-full h-56 font-bold text-4xl">
        Hello, world!
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="블로그" />;

export default IndexPage;
