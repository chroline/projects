import { styled } from "goober";

import Block from "../Block/index";
import theme from "~/styles/theme";

const _Text = styled("p")`
  margin: 0;
  line-height: 1.5;
  min-height: ${theme.spaces[6]};
  padding: ${theme.spaces[1.5]} 0;
`;

export default function Text(props) {
  return (
    <Block>
      <_Text {...props}>
        <span>{props.children}</span>
      </_Text>
    </Block>
  );
}
