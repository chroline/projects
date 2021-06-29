import { styled } from "goober";

import theme from "~/styles/theme";

const Block = styled("div")`
  & ~ * {
    margin-top: ${theme.spaces[0.5]};
    margin-bottom: 0;
  }
`;

export default Block;
