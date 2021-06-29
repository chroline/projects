import React from "react";

import { styled } from "goober";
import NextLink from "next/link";
import tinycolor from "tinycolor2";

import isURL from "~/util/isURL";

import theme from "~/styles/theme";

const _Anchor = styled("a")`
  text-decoration: none;
  transition: color 0.1s;

  color: ${theme.colors.gray[500]};
  span {
    transition: border-bottom-color 0.1s;
    border-bottom: 1px solid ${theme.colors.gray[200]};
  }
  &:hover {
    color: ${theme.colors.gray[800]};
    span {
      border-bottom-color: ${theme.colors.gray[800]};
    }
  }

  color: ${theme.colors.gray[500]};
  span {
    transition: border-bottom-color 0.1s;
    border-bottom: 1px solid ${tinycolor(theme.colors.gray[500]).setAlpha(0.4).toString()};
  }
  &:hover {
    color: ${theme.colors.gray[800]};
    span {
      border-bottom-color: ${theme.colors.gray[800]};
    }
  }
  @media (prefers-color-scheme: dark) {
    color: ${theme.colors.gray[400]};
    span {
      border-bottom-color: ${tinycolor(theme.colors.gray[400]).setAlpha(0.4).toString()};
    }
    &:hover {
      color: #fff;
      span {
        border-bottom-color: ${tinycolor("#fff").setAlpha(0.4).toString()};
      }
    }
  }
`;

export default function Anchor({ href, children }: React.PropsWithChildren<{ href: string }>) {
  const openInNewTab = isURL(href);
  return (
    <NextLink href={href} passHref>
      <_Anchor target={openInNewTab ? "_blank" : undefined}>
        <span>{children}</span>
      </_Anchor>
    </NextLink>
  );
}
