import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../../components/Layout";
import PostPreview from "../../components/post-preview";
import Seo from "../../components/Seo";

const Search = () => {
  const [keyword, setKeyword] = React.useState("");
  const [results, setResults] = React.useState({});

  const onChange = (value: string) => setKeyword(value);
  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <form
        onSubmit={(event) => onSearch(event)}
        className="py-12 flex justify-center items-center"
      >
        <input
          className="w-80 h-10 rounded-l-md p-4 outline-none bg-white dark:bg-zinc-500 dark:placeholder-slate-200"
          onChange={({ currentTarget: { value } }) => onChange(value)}
          placeholder="검색어 입력.."
          value={keyword}
        />
        <button className="w-24 h-10 bg-cyan-500 rounded-r-md text-white">
          검색
        </button>
      </form>
      <section className="min-h-[300px]">
        <div className="grid grid-cols-2 gap-4"></div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="검색" />;

export default Search;
