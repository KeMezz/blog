import React, { ReactElement } from "react";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { Link } from "gatsby";
import { cls } from "../utils/cls";
import HeaderLink from "./HeaderLink";

interface LayoutProps {
  disablePaddings?: boolean;
  hideNav?: boolean;
  children: ReactElement | ReactElement[];
}

function Layout({ children, disablePaddings, hideNav }: LayoutProps) {
  const pathname = window.location.pathname;
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <header className="w-full h-28 lg:h-20 bg-white dark:bg-zinc-900 dark:text-white">
        <div className="flex flex-col h-full lg:flex-row lg:px-8 lg:mx-auto lg:max-w-7xl">
          <div className="w-full h-20 lg:h-auto flex justify-center lg:justify-between items-center lg:border-none">
            <Link to="/">
              <h1 className="text-4xl font-extrabold font-['Pacifico'] antialiased">
                .cache
              </h1>
            </Link>
          </div>
          {hideNav ? null : (
            <nav className="w-full lg:w-auto h-8 lg:h-auto grid grid-cols-2 place-items-center divide-x divide-gray-300 dark:divide-zinc-900 lg:divide-none">
              <HeaderLink to="/" title="홈" active={pathname === "/"} />
              <HeaderLink
                to="/blog"
                title="블로그"
                active={pathname.startsWith("/blog")}
              />
              {/* <HeaderLink
                to="/search"
                title="검색"
                active={pathname.startsWith("/search")}
              /> */}
            </nav>
          )}
        </div>
      </header>
      <section className="bg-gray-100 dark:bg-zinc-800 dark:text-white">
        <div
          className={cls(`max-w-7xl mx-auto`, disablePaddings ? "" : "px-6")}
        >
          {children}
        </div>
      </section>
      <footer className="py-8 bg-white dark:bg-zinc-900 dark:text-white">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-7xl lg:mx-auto lg:px-8 gap-4 lg:gap-6">
          <h2 className="text-2xl font-bold lg:text-3xl font-['Pacifico'] antialiased">
            Hyeongjin Developer Blog
          </h2>
          <p className="text-xs lg:text-sm font-thin">
            ©️ 2022-2023 Hyeongjin. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-2xl text-gray-600 dark:text-gray-300">
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
