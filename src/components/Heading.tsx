import { useEffect, useState } from "react";

import { styled } from "goober";

import Block from "./Block";
import { useTableOfContentsContext } from "./TableOfContents/TableOfContentsContext";
import theme from "~/styles/theme";

const _Heading = styled<{ level: number }>("p")`
  font-size: ${({ level }) => {
    switch (level) {
      case 1:
        return theme.fontSizes["3xl"];
      case 2:
        return theme.fontSizes["2xl"];
      case 3:
        return theme.fontSizes.xl;
    }
  }};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${({ level }) => {
      switch (level) {
        case 1:
          return theme.fontSizes["2xl"];
        case 2:
          return theme.fontSizes.xl;
        case 3:
          return theme.fontSizes.lg;
      }
    }};
  }

  font-weight: 600;

  margin-top: ${({ level }) => theme.spaces[9 - level * 2]};
  margin-bottom: ${theme.spaces[1.5]};
`;

export default function heading(level: number) {
  return props => {
    const { headings, headingIndex } = useTableOfContentsContext();
    const [id] = useState(headingIndex[0]);
    headingIndex[1]();

    useEffect(() => {
      headings[1](headings => {
        return [...headings, { level, id, children: props.children }];
      });
    }, []);

    return (
      <Block>
        <_Heading as={"h" + level} level={level} id={"heading-" + id} {...props} />
      </Block>
    );
  };
}
