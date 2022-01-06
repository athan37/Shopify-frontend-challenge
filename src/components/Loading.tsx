import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 7% auto;
  border-color: red;
`;
export const Loading = () => {
  return <ClipLoader css={override} />;
};
