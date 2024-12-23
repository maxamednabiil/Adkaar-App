import * as React from "react"
import Svg, {
  Mask,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={182}
    height={182}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={182}
      height={101}
      x={0}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 4.266h182v100.242H0V4.266Z" />
    </Mask>
    <G strokeMiterlimit={10} clipPath="url(#b)" mask="url(#a)">
      <Path
        fill="url(#c)"
        stroke="#F8AF18"
        strokeWidth={1.635}
        d="M90.976 113.939c12.643 0 22.892-10.25 22.892-22.893s-10.249-22.892-22.892-22.892c-12.643 0-22.893 10.25-22.893 22.892 0 12.643 10.25 22.893 22.893 22.893Z"
      />
      <Path
        stroke="#FBBF24"
        strokeLinecap="round"
        strokeWidth={6.541}
        d="m116.085 65.936 9.577-9.577m-69.374 69.374 9.552-9.551m60.677-25.136h13.522m-98.128 0h13.573M91 55.53l-.025-13.548m0 98.129v-13.574m-25.11-60.55-9.602-9.603m69.374 69.374-9.552-9.551"
      />
    </G>
    <Path
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6.398}
      d="M45.5 113.75h91"
    />
    <Defs>
      <LinearGradient
        id="c"
        x1={79.529}
        x2={102.422}
        y1={71.211}
        y2={110.882}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBBF24" />
        <Stop offset={0.5} stopColor="#FBBF24" />
        <Stop offset={1} stopColor="#F59E0B" />
      </LinearGradient>
      <ClipPath id="b">
        <Path fill="#fff" d="M38.65 38.721H143.3v104.65H38.65z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
