import React from "react";

import ToggleBody from "./ToggleBody";
import { ToggleContext } from "./ToggleContext";
import ToggleHeader from "./ToggleHeader";

export default function Toggle({ children }: React.PropsWithChildren<{}>) {
  return (
    <ToggleContext>
      {children}
      <ToggleHeader />
      <ToggleBody />
    </ToggleContext>
  );
}
