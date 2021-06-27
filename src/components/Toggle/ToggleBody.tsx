import React from "react";

import { styled } from "goober";

import Block from "../Block";
import { useToggleContext } from "./ToggleContext";
import theme from "~/styles/theme";

const _ToggleBody = styled("div")`
  margin-left: ${theme.spaces["7.5"]};
`;

export default function ToggleBody() {
  const { content, isOpen } = useToggleContext();

  return (
    <Block>
      <_ToggleBody style={{ display: isOpen[0] ? "block" : "none" }}>{content[0]}</_ToggleBody>
    </Block>
  );
}
