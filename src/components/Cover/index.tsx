import { styled } from "goober";
import Image from "next/image";

import theme from "~/styles/theme";

const _Cover = styled("div")`
  width: 100%;
  height: ${theme.spaces[56]};

  margin-bottom: -${theme.spaces[40]};
`;

const _CoverImage = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export default function Cover({ src, position = "center" }: { src: string; position: string }) {
  return (
    <_Cover>
      <_CoverImage>
        <Image src={src} layout={"fill"} />
      </_CoverImage>
    </_Cover>
  );
}
