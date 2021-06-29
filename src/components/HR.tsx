import React from "react";

import { styled } from "goober";

import Block from "./Block";
import theme from "~/styles/theme";

const _HR = styled("hr")`
  margin: ${theme.spaces[10]} 0;

  border-color: ${theme.colors.gray[200]};
  @media (prefers-color-scheme: dark) {
    border-color: ${theme.colors.gray[600]};
  }
`;

export default function HR() {
  return (
    <Block>
      <_HR />
    </Block>
  );
}
