import React, { useState } from "react";
import { useEffect } from "react";

import { styled } from "goober";
import Head from "next/head";
import Image from "next/image";

import theme from "~/styles/theme";

const _Header = styled("div")`
  margin: ${theme.spaces[20]} 0 ${theme.spaces[5]} 0;
`;

const _HeaderImageIcon = styled("div")`
  width: 140px;
  height: 140px;
  position: relative;

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
  const [imageIcon, setImageIcon] = useState(undefined);

  useEffect(() => {
    _iconIsImage &&
      (async () => {
        //setImageIcon(await import("../../../public/" + icon));
      })();
  });

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
      {_iconIsImage && (
        <_HeaderImageIcon>
          {<Image src={icon} alt={"page icon"} width={140} height={140} quality={100} />}
        </_HeaderImageIcon>
      )}
      {!_iconIsImage && <_HeaderImageEmoji>{icon}</_HeaderImageEmoji>}
      <_HeaderTitle>{title}</_HeaderTitle>
    </_Header>
  );
}
