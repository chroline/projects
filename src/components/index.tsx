import Anchor from "./Anchor";
import Callout from "./Callout";
import HR from "./HR";
import heading from "./Heading";
import PageLink from "./PageLink";
import TableOfContents from "./TableOfContents";
import Text from "./Text";
import Toggle from "./Toggle";
import ToggleContent from "./Toggle/ToggleContent";
import ToggleTitle from "./Toggle/ToggleTitle";

export const mdxComponents = {
  Callout,
  PageLink,
  Toggle,
  ToggleTitle,
  ToggleContent,
  TableOfContents,

  h1: heading(1),
  h2: heading(2),
  h3: heading(3),

  p: Text,
  a: Anchor,
  hr: HR,
};
