import React from "react";

import { useToggleContext } from "./ToggleContext";

export default function ToggleContent({ children }: React.PropsWithChildren<{}>) {
  const toggleContext = useToggleContext();
  toggleContext.content[1](children);

  return <></>;
}
