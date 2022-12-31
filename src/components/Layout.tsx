import { Link } from "gatsby";
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
      <header className="w-full h-20 bg-white border-b">
        <div className="h-full flex items-center justify-between max-w-7xl px-6 mx-auto">
          <h1 className="text-3xl font-bold">.storage</h1>
          <nav className="flex gap-8">
            <HeaderLink title="블로그" to="/" />
            <HeaderLink title="방명록" to="/" />
            <HeaderLink title="포트폴리오" to="/" />
          </nav>
        </div>
      </header>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 ">{children}</div>
      </section>
      <footer className="p-12 border-t">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Hyeongjin Developer Blog</h2>
          <p className="text-sm">
            오히려 잘 모르기 때문에 글로 남기려고 합니다.
            <br />
            함께 채워가는 블로그를 만들고 싶어요!
          </p>
          <div className="flex gap-6 text-3xl text-gray-600">
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
