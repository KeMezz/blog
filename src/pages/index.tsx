import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center w-full h-56 text-4xl">
        다람쥐 헌 쳇바퀴 타고파 hello world HELLO WORLD
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="블로그" />;

export default IndexPage;
