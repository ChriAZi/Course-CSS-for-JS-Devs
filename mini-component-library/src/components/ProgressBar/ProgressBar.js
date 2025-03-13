/* eslint-disable no-unused-vars */
// noinspection CssUnresolvedCustomProperty

import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--bar-height": 8 + "px",
    "--wrapper-padding": 0 + "px",
    "--wrapper-radius": 4 + "px",
  },
  medium: {
    "--bar-height": 12 + "px",
    "--wrapper-padding": 0 + "px",
    "--wrapper-radius": 4 + "px",
  },
  large: {
    "--bar-height": 16 + "px",
    "--wrapper-padding": 4 + "px",
    "--wrapper-radius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size: ${size}.`);
  }

  if (value < 0 || value > 100) {
    throw new Error("Progress value has to be within including 0 and 100.");
  }

  return (
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar style={styles} value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: var(--wrapper-padding);
  box-shadow: inset 0 2px 4px 0 ${COLORS.transparentGray35};
  border-radius: var(--wrapper-radius);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: var(--bar-height);
  width: ${(p) => p.value}%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
