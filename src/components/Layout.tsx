import React, { ReactElement } from "react";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import HeaderLink from "./HeaderLink";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

function Layout({ children }: LayoutProps) {
  return (
    <main>
      <header className="w-full h-30 lg:h-20 bg-white border-b">
        <div className="flex flex-col h-full lg:flex-row lg:px-8 lg:mx-auto lg:max-w-7xl">
          <div className="w-full h-20 lg:h-auto flex justify-center lg:justify-between items-center border-b lg:border-none">
            <h1 className="text-4xl font-extrabold mt-2">.cache</h1>
          </div>
          <nav className="w-full lg:w-auto h-10 lg:h-auto grid grid-cols-3 place-items-center divide-x lg:divide-none">
            <HeaderLink to="/" title="블로그" />
            <HeaderLink to="/" title="방명록" />
            <HeaderLink to="/" title="포트폴리오" />
          </nav>
        </div>
      </header>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 ">{children}</div>
      </section>
      <footer className="border-t py-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-7xl lg:mx-auto lg:px-8 gap-4 lg:gap-6">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Hyeongjin Developer Blog
          </h2>
          <p className="text-xs lg:text-sm">
            오히려 잘 모르기 때문에 글로 남기려고 합니다.
            <br />
            함께 채워가는 블로그를 만들고 싶어요!
          </p>
          <div className="flex gap-6 text-2xl text-gray-600">
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Layout;
