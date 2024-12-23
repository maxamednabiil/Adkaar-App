import * as React from "react"
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      fill="#F0F4F3"
      d="M32.546 6a3.507 3.507 0 0 1 3.507 3.507v22.43a.876.876 0 0 1-1.498.618l-5.002-5.002a1.753 1.753 0 0 0-1.24-.514H11.508A3.507 3.507 0 0 1 8 23.534V9.507A3.507 3.507 0 0 1 11.507 6h21.039Z"
    />
    <Path
      fill="#FBBC58"
      d="M3.198 0A3.198 3.198 0 0 0 0 3.198v20.458a.8.8 0 0 0 1.366.565l4.562-4.563a1.6 1.6 0 0 1 1.13-.468h15.33a3.198 3.198 0 0 0 3.198-3.199V3.199A3.198 3.198 0 0 0 22.388 0H3.198Z"
    />
  </Svg>
)
export default SvgComponent
