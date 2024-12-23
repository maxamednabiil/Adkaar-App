import * as React from "react"
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={61}
    height={61}
    fill="none"
    {...props}
  >
    <Path
      fill="#FBBC58"
      d="m28.212 54.339 16.585-37.373-38.506 13.75 8.512 9.2 22.12-15.643-17.249 20.892 8.538 9.174Z"
    />
  </Svg>
)
export default SvgComponent
