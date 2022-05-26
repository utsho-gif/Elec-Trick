import React from "react";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div>
      <BarLoader color='#1B98F5' css={override} size={150} />
    </div>
  );
};

export default Loading;
