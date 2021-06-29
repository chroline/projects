import { useEffect, useState } from "react";

import constate from "constate";
import { useRouter } from "next/router";

const [TableOfContentsContext, useTableOfContentsContext] = constate(() => {
  const headings = useState<{ level: number; id: number; children: React.ReactNode }[]>([]);
  const headingIndex: [number, () => void] = [
    0,
    () => {
      headingIndex[0] = headingIndex[0] + 1;
    },
  ];

  function reset() {
    headings[1]([]);
    headingIndex[0] = 0;
  }

  return { headings, headingIndex, reset };
});

export { TableOfContentsContext, useTableOfContentsContext };

export function TableOfContentsManager() {
  const { slug } = useRouter().query as any;
  const { reset } = useTableOfContentsContext();

  useEffect(() => {
    reset();
  }, [slug]);

  return <></>;
}
