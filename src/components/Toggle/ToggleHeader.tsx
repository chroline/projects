import React from "react";

import { styled } from "goober";

import Block from "../Block";
import ToggleButton from "./ToggleButton";
import { useToggleContext } from "./ToggleContext";

const _ToggleHeader = styled("div")`
  display: flex;

  p {
    padding: 0;
  }
`;

export default function ToggleHeader({ children }: React.PropsWithChildren<{}>) {
  const { title } = useToggleContext();

  return (
    <Block>
      <_ToggleHeader>
        <ToggleButton />
        {title[0]}
      </_ToggleHeader>
    </Block>
  );
}
