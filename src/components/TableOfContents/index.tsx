import { styled } from "goober";
import tinycolor from "tinycolor2";

import Block from "../Block";
import { useTableOfContentsContext } from "./TableOfContentsContext";
import theme from "~/styles/theme";

const _Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

const _Link = styled<{ href: string; _level: number }>("a")`
  width: 100%;

  text-decoration: none;
  transition: color 0.1s;

  padding: ${theme.spaces[1]} ${theme.spaces[0.5]};
  padding-left: ${({ _level }) => theme.spaces[4 * (_level - 1) + 2]};
  font-size: ${theme.fontSizes.sm};

  &:hover {
    background-color: ${tinycolor(theme.colors.gray[100]).setAlpha(0.16).toString()};
  }

  color: ${theme.colors.gray[500]};
  span {
    transition: border-bottom-color 0.1s;
    border-bottom: 1px solid ${tinycolor(theme.colors.gray[500]).setAlpha(0.4).toString()};
  }
  @media (prefers-color-scheme: dark) {
    color: ${theme.colors.gray[400]};
    span {
      border-bottom-color: ${tinycolor(theme.colors.gray[400]).setAlpha(0.4).toString()};
    }
  }
`;

export default function TableOfContents() {
  const { headings } = useTableOfContentsContext();

  return (
    <Block>
      <_Container>
        {headings[0].map((heading, i) => (
          <_Link key={i} href={"#heading-" + heading.id} _level={heading.level}>
            <span>{heading.children}</span>
          </_Link>
        ))}
      </_Container>
    </Block>
  );
}
