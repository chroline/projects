import React from "react";

import * as fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import PageProps from "~/util/PageProps";

import Page from "~/components/Page";
import { mdxComponents } from "~/components/index";

export const getStaticProps: GetServerSideProps = async context => {
  const rawPage = fs.readFileSync(`src/content/index.mdx`, "utf8").toString();
  const { content, data: frontmatter } = matter(rawPage);
  const serializedPage = await serialize(content, { scope: frontmatter });

  return { props: { serializedPage, frontmatter } };
};

export default function MDXPage(props: PageProps) {
  return <Page {...props} />;
}
