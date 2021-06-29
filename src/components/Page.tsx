import React, { useEffect, useState } from "react";

import { styled } from "goober";
import { createGlobalStyles } from "goober/global";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useRouter } from "next/dist/client/router";

import PageProps from "~/util/PageProps";

import { mdxComponents } from ".";
import Cover from "./Cover";
import Header from "./Header";
import { TableOfContentsContext, TableOfContentsManager } from "./TableOfContents/TableOfContentsContext";
import theme from "~/styles/theme";

// language: CSS
const GlobalStyles = createGlobalStyles`
  html, body, #__next {
    color: ${theme.colors.gray[700]};
    background: #fff;
    @media (prefers-color-scheme: dark) {
      color: ${theme.colors.gray[50]};
      background: #2f3437;
    }
  }
`;

const _Container = styled("div")`
  width: 100%;
  min-height: 100%;

  display: flex;
  justify-content: center;

  margin: 0;
  padding-bottom: 30vh;
`;

const _Page = styled("article")`
  font-family: ${theme.fontFamilies.body};

  max-width: ${theme.sizes["4xl"]};
  width: 100%;

  display: flex;
  align-items: stretch;
  flex-direction: column;

  line-break: auto;
  word-wrap: break-word;

  padding: 0 ${theme.spaces[24]};
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spaces[6]};
  }
`;

export default function Page({ serializedPage, frontmatter }: PageProps) {
  return (
    <>
      <GlobalStyles />
      <TableOfContentsContext>
        <TableOfContentsManager />
        {frontmatter.cover && <Cover src={frontmatter.cover} position={frontmatter._coverPosition} />}
        <_Container>
          <_Page>
            <Header {...frontmatter} />
            <MDXRemote {...serializedPage} components={mdxComponents} />
          </_Page>
        </_Container>
      </TableOfContentsContext>
    </>
  );
}
