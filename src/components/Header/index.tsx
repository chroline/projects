import React from "react";

import { styled } from "goober";
import Head from "next/head";

import theme from "~/styles/theme";

const _Header = styled("div")`
  margin: ${theme.spaces[20]} 0 ${theme.spaces[5]} 0;
`;

const _HeaderImageIcon = styled("img")`
  width: ${theme.spaces[32]};
  height: ${theme.spaces[32]};

  margin: ${theme.spaces[3]};
`;

const _HeaderImageEmoji = styled("p")`
  font-size: ${theme.spaces[20]};
  margin-bottom: -${theme.spaces[3]};
`;

const _HeaderTitle = styled("h1")`
  margin: ${theme.spaces[9]} 0 ${theme.spaces[1]} 0;

  font-weight: 700;
  line-height: 1.2;

  font-size: ${theme.fontSizes["4xl"]};
  @media (max-width: ${theme.breakpoints.sm}) {
    margin: ${theme.spaces[6]} 0 ${theme.spaces[1]} 0;
    font-size: ${theme.fontSizes["3xl"]};
  }
`;

export default function Header({ icon, _iconIsImage, title }: { icon: string; _iconIsImage: boolean; title: string }) {
  return (
    <_Header>
      <Head>
        <title>{title}</title>
        <link
          rel={"icon"}
          href={
            _iconIsImage
              ? icon
              : `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`
          }
        />
      </Head>
      {_iconIsImage && <_HeaderImageIcon src={icon} />}
      {!_iconIsImage && <_HeaderImageEmoji>{icon}</_HeaderImageEmoji>}
      <_HeaderTitle>{title}</_HeaderTitle>
    </_Header>
  );
}
