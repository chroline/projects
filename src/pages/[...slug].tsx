import React from "react";

import * as fs from "fs";
import { styled } from "goober";
import matter from "gray-matter";
import { GetServerSideProps, GetStaticPaths } from "next";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Page from "~/components/Page";

import PageProps from "../util/PageProps";
import getFilesRecursively from "../util/getFilesRecursively";

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFilesRecursively("src/content")
    .map(file => file.split("src/content/")[1])
    .map(file => file.split(".").slice(0, -1).join("."));

  return {
    paths: files.map(slug => {
      if (slug.split("/index").length > 1) slug = slug.split("/index").slice(0, -1).join("/index");
      return { params: { slug: slug.split("/") } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetServerSideProps = async context => {
  const { slug } = context.params as any;
  let rawPage: string;
  try {
    rawPage = fs.readFileSync(`src/content/${slug.join("/")}.mdx`, "utf8").toString();
  } catch (_) {
    rawPage = fs.readFileSync(`src/content/${slug.join("/")}/index.mdx`, "utf8").toString();
  }
  const { content, data: frontmatter } = matter(rawPage);
  const serializedPage = await serialize(content, { scope: frontmatter });

  return { props: { serializedPage, frontmatter } };
};

export default function MDXPage(props: PageProps) {
  return <Page {...props} />;
}
