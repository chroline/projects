import { styled } from "goober";
import tinycolor from "tinycolor2";

import Block from "../Block";
import { useTableOfContentsContext } from "./TableOfContentsContext";
import theme from "~/styles/theme";

// https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-page-table-of-contents.ts
function transformHeadings(headings: { level: number; id: number; children: React.ReactNode }[]) {
  const indentLevelStack = [
    {
      actual: -1,
      effective: -1,
    },
  ];

  for (const item of headings) {
    const { level } = item;
    let actual = level;

    do {
      const prevIndent = indentLevelStack[indentLevelStack.length - 1];
      const { actual: prevActual, effective: prevEffective } = prevIndent;

      if (actual > prevActual) {
        item.level = prevEffective + 1;
        indentLevelStack.push({
          actual,
          effective: item.level,
        });
      } else if (actual === prevActual) {
        item.level = prevEffective;
        break;
      } else {
        indentLevelStack.pop();
      }
    } while (true);
  }

  return headings;
}

const _Container = styled("div")`
  display: flex;
  flex-direction: column;
`;

const _Link = styled<{ href: string; _level: number }>("a")`
  width: 100%;

  text-decoration: none;
  transition: color 0.1s;

  padding: ${theme.spaces[1]} ${theme.spaces[0.5]};
  padding-left: ${({ _level }) => theme.spaces[0.5 + 4 * _level]};
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
  const transformedHeadings = transformHeadings(headings[0]);

  return (
    <Block>
      <_Container>
        {transformedHeadings.map((heading, i) => (
          <_Link key={i} href={"#heading-" + heading.id} _level={heading.level}>
            <span>{heading.children}</span>
          </_Link>
        ))}
      </_Container>
    </Block>
  );
}
