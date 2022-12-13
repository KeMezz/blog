import React, { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

function Layout({ children }: LayoutProps) {
  return (
    <main>
      <header></header>
      {children}
      <footer></footer>
    </main>
  );
}

export default Layout;
