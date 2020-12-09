import * as React from "react"

function HeroPath(props) {
  return (
    <svg height="0" width="0" viewBox="0 0 100 100">
      <defs>
        <clipPath id="svgPath"  clipPathUnits="userSpaceOnUse">
          <path id="logo-shape" d="M1042,0L1272,0L1382,193.999L1158,193.999L932,586.999L1382,586.999L1273,783.999L818,783.999L703,588L1042,0Z"/>
          <path id="logo-shape" d="M1440,1080L1210,1080L1100,885.999L1324,885.999L1550,492.999L1100,492.999L1209,296L1664,296L1779,491.999L1440,1080Z"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default HeroPath
