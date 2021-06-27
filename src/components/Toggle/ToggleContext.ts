import { useState } from "react";

import constate from "constate";

const [ToggleContext, useToggleContext] = constate(() => {
  const title = useState<React.ReactNode>();
  const content = useState<React.ReactNode>();

  const isOpen = useState(false);

  return { title, content, isOpen };
});

export { ToggleContext, useToggleContext };
