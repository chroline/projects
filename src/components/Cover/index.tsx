import { styled } from "goober";

import theme from "~/styles/theme";

const _Cover = styled("div")`
  width: 100%;
  height: ${theme.spaces[56]};

  background-size: cover;

  margin-bottom: -${theme.spaces[40]};
`;

export default function Cover({ src, position = "center" }: { src: string; position: string }) {
  return <_Cover style={{ backgroundImage: `url("/${src}")`, backgroundPosition: position }} />;
}
