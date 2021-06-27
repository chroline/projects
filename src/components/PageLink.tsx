import React from "react";

import { styled } from "goober";
import NextLink from "next/link";
import tinycolor from "tinycolor2";

import isURL from "~/util/isURL";

import Block from "./Block";
import theme from "~/styles/theme";

interface PageLinkProps {
  icon: string;
  color: string;
  to: string;
}

const _PageLink = styled<{ _color: string; href: string; target: string }>("a")`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 0 ${theme.spaces[2]};

  background: ${({ _color }) => tinycolor(theme.colors[_color]["400"]).setAlpha(0.16).toString()};
  &:hover {
    background: ${({ _color }) => tinycolor(theme.colors[_color]["400"]).setAlpha(0.32).toString()};
    cursor: pointer;
  }

  p {
    width: 100%;

    text-decoration: none;
    transition: color 0.1s;

    padding: ${theme.spaces[1]} ${theme.spaces[0.5]};

    font-weight: 500;

    color: ${theme.colors.gray[800]};
    span {
      transition: border-bottom-color 0.1s;
      border-bottom: 1px solid ${tinycolor(theme.colors.gray[800]).setAlpha(0.16).toString()};
    }
    @media (prefers-color-scheme: dark) {
      color: ${theme.colors.gray[50]};
      span {
        border-bottom: 1px solid ${tinycolor(theme.colors.gray[50]).setAlpha(0.16).toString()};
      }
    }
  }
`;

const _Icon = styled("div")`
  font-size: ${theme.fontSizes.lg};
  margin-right: ${theme.spaces[2]};
`;

export default function PageLink({ icon, color = "gray", to, children }: React.PropsWithChildren<PageLinkProps>) {
  const openInNewTab = isURL(to);
  return (
    <Block>
      <NextLink href={to}>
        <_PageLink _color={color} href={to} target={openInNewTab ? "_blank" : undefined}>
          <_Icon>{icon}</_Icon>
          {children}
        </_PageLink>
      </NextLink>
    </Block>
  );
}
