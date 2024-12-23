import * as React from "react"
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.438}
      d="M6.5 8.125H26M6.5 19.5h26m-26 11.375h13"
    />
  </Svg>
)
export default SvgComponent
