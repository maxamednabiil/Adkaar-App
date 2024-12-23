import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M32.5 8.125v3.25h-5.23a13 13 0 1 1-17.34.179 6.5 6.5 0 0 0 2.534 2.323 9.492 9.492 0 0 0-3.527 7.394 9.75 9.75 0 0 0 9.75 9.604 9.587 9.587 0 0 0 5.688-17.42V19.5h-3.25V8.125H32.5Zm-17.063-3.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
