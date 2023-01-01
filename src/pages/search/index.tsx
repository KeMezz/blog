import * as React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const Search = () => {
  return (
    <Layout>
      <div className="py-6 h-96">
        <h1 className="text-xl font-bold">검색</h1>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="검색" />;

export default Search;
