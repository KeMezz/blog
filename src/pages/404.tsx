import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout hideNav>
      <div className="flex flex-col justify-center items-center py-32">
        <h1 className="text-center font-bold text-2xl mb-8">
          ⛔️ 404 Not Found ️⛔️
        </h1>
        <p className="text-center mb-6">
          죄송해요..😔
          <br />
          요청하신 페이지는 없는 페이지에요.
        </p>
        <Link to="/" className="pt-6 border-t mb-16 text-sm">
          <button className="px-4 py-2 bg-cyan-500 text-white rounded-xl">
            홈으로 돌아가기
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
