import { MDXRemoteSerializeResult } from "next-mdx-remote";

export default interface PageProps {
  serializedPage: MDXRemoteSerializeResult;
  frontmatter: {
    title: string;
    icon: string;
    _iconIsImage: boolean;
    cover: string;
    _coverPosition: string;
  };
}
