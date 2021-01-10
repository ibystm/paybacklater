import React from 'react'
import Svg, { Path } from 'react-native-svg'

const CloseButton = () => {
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.771 8.09L.197 1.58 1.617.174l6.576 6.51 6.575-6.51 1.42 1.408L9.615 8.09l6.575 6.509-1.421 1.407-6.575-6.51-6.575 6.51-1.421-1.407 6.574-6.51z"
        fill="#8851DB"
      />
    </Svg>
  )
}

export default CloseButton
