import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { FaRegHandshake } from "@react-icons/all-files/fa/FaRegHandshake";
import { FaRegPaperPlane } from "@react-icons/all-files/fa/FaRegPaperPlane";

const IndexPage = () => {
  return (
    <Layout>
      <section className="flex flex-col lg:flex-row lg:gap-8">
        <div className="mt-8 flex justify-center">
          <StaticImage
            className="w-48 h-48"
            src="../images/icon.png"
            alt="memoji"
          />
        </div>
        <div className="py-8 flex flex-col gap-4">
          <h1 className="text-lg lg:text-xl font-semibold">반갑습니다아!</h1>
          <p className="text-sm lg:text-base leading-6 lg:leading-8">
            2년 차 주니어 개발자 정형진입니다. 프론트엔드를 위주로 개발하고
            있어요. "dotCache" 라는 이름의 이 블로그는 캐쉬처럼 빠르게 저장하고
            불러올 수 있는, 유용한 저장소가 되었으면 하는 마음으로 지은
            블로그입니다.
          </p>
          <p className="text-sm lg:text-base leading-6 lg:leading-8">
            포스트 내용 중에 틀린 부분이 있거나 블로그를 이용하며 불쾌한 경험을
            하신 적이 있으시다면, 각 포스트 하단의 디스커션이나 저의 메일을 통해
            통해 의견을 남겨주시면 감사하겠습니다! ☺️
          </p>
        </div>
      </section>
      <div className="lg:mt-8 flex gap-4 justify-center px-4 pb-12">
        <a
          href="mailto:pnescene@icloud.com"
          className="flex w-full justify-center items-center h-8 lg:h-10 lg:text-xl gap-2 lg:gap-4 max-w-xs shadow-sm bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition-colors"
        >
          <FaRegPaperPlane />
          <span className="text-xs lg:text-base">Send Email</span>
        </a>
        <a
          href="https://github.com/KeMezz/blog/discussions"
          className="flex w-full justify-center items-center h-8 lg:h-10 lg:text-xl gap-2 lg:gap-4 max-w-xs shadow-sm bg-violet-400 text-white rounded-lg hover:bg-violet-500 transition-colors"
        >
          <FaRegHandshake />
          <span className="text-xs lg:text-base">Open Discussions</span>
        </a>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="홈" />;

export default IndexPage;
