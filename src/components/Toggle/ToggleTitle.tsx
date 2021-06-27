import React from "react";

import { useToggleContext } from "./ToggleContext";

export default function ToggleTitle({ children }: React.PropsWithChildren<{}>) {
  const toggleContext = useToggleContext();
  toggleContext.title[1](children);

  return <></>;
}
