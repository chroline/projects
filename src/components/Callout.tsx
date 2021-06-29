import React from "react";

import { styled } from "goober";
import tinycolor from "tinycolor2";

import Block from "./Block";
import theme from "~/styles/theme";

interface CalloutProps {
  icon: string;
  bgColor?: string;
  textColor?: string;
}

const _Callout = styled<{ _bgColor?: string; _textColor?: string }>("div")`
  width: 100%;

  display: flex;

  padding: ${theme.spaces[4]};
  margin: ${theme.spaces[1]} 0;

  border-radius: ${theme.borderRadii.sm};

  background: ${({ _bgColor }) =>
    _bgColor ? tinycolor(theme.colors[_bgColor]["400"]).setAlpha(0.16).toString() : "transparent"};
  color: ${({ _textColor }) => (_textColor ? theme.colors[_textColor]["500"] : "inherit")};
  border: ${({ _bgColor, _textColor }) => (_textColor && !_bgColor ? "1px solid " + theme.colors.gray[200] : "none")};

  @media (prefers-color-scheme: dark) {
    border: ${({ _bgColor, _textColor }) => (_textColor && !_bgColor ? "1px solid " + theme.colors.gray[600] : "none")};
    color: ${({ _textColor }) => (_textColor ? theme.colors[_textColor]["300"] : "inherit")};
  }
`;

const _Icon = styled("div")`
  margin-right: ${theme.spaces[4]};
`;

const _Body = styled("div")`
  margin: -${theme.spaces[1.5]} 0;
  overflow: hidden;
`;

export default function Callout({ icon, bgColor, textColor, children }: React.PropsWithChildren<CalloutProps>) {
  return (
    <Block>
      <_Callout _bgColor={bgColor} _textColor={textColor}>
        <_Icon>{icon}</_Icon>
        <_Body>{children}</_Body>
      </_Callout>
    </Block>
  );
}
