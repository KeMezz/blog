import React from "react";
import "./src/styles/global.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";
import { GatsbyBrowser } from "gatsby";
import { QueryParamProvider } from "use-query-params";
import { GatsbyAdapter } from "./src/utils/adaptor";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <QueryParamProvider
      adapter={GatsbyAdapter}
      options={{ enableBatching: true }}
    >
      {element}
    </QueryParamProvider>
  );
};
