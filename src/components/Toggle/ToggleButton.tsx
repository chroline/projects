import { styled } from "goober";

import { useToggleContext } from "./ToggleContext";
import theme from "~/styles/theme";

const _ToggleButton = styled("button")`
  width: ${theme.spaces[5.5]};
  height: ${theme.spaces[6]};

  border-radius: ${theme.borderRadii.sm};

  margin-right: ${theme.spaces[2]};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${theme.colors.gray[100]};
  }

  &:active {
    background: ${theme.colors.gray[200]};
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

const _ButtonSVG = styled("svg")`
  width: ${theme.spaces[3]};
  height: ${theme.spaces[3]};

  fill: currentColor;

  transition: transform 0.2s;
`;

export default function ToggleButton() {
  const { isOpen } = useToggleContext();

  return (
    <_ToggleButton onClick={() => isOpen[1](isOpen => !isOpen)}>
      <_ButtonSVG viewBox={"0 0 100 100"} style={{ transform: `rotate(${isOpen[0] ? 180 : 90}deg)` }}>
        <polygon points={"5.9,88.2 50,11.8 94.1,88.2 "} />
      </_ButtonSVG>
    </_ToggleButton>
  );
}
