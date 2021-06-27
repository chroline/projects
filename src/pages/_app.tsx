import React from "react";

import { setup } from "goober";
import { prefix } from "goober-autoprefixer";

import "~/styles/base.css";

setup(React.createElement, prefix, undefined, props => {
  for (let prop in props) {
    if (prop.substr(0, 1) === "_") {
      delete props[prop];
    }
  }
  return undefined;
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
