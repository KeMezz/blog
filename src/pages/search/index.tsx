import * as React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const Search = () => {
  return (
    <Layout>
      <div className="py-6 h-96 flex justify-center items-center">
        <h1 className="text-lg">검색 기능은 아직 개발 중이에요!</h1>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="검색" />;

export default Search;
