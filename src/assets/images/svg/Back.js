import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4.457 16.5L13.885 25.928 12 27.813 1.63 17.443a1.333 1.333 0 0 1 0-1.886L12 5.187l1.885 1.885L4.457 16.5Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
