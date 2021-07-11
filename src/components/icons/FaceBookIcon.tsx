import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const FacebookIcon: React.FC = () => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M18 9a9 9 0 00-9-9 9 9 0 00-9 9 9.001 9.001 0 007.594 8.891v-6.29H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.136c-1.118 0-1.466.695-1.466 1.407V9h2.496l-.399 2.602h-2.097v6.289A9.001 9.001 0 0018 9z"
        fill="#5890FF"
      />
      <Path
        d="M12.503 11.602l.4-2.602h-2.497V7.312c0-.711.348-1.406 1.466-1.406h1.136V3.691s-1.03-.175-2.015-.175c-2.056 0-3.4 1.246-3.4 3.501V9H5.31v2.602h2.285v6.289a9.05 9.05 0 002.812 0v-6.29h2.097z"
        fill="#fff"
      />
    </Svg>
  )
}

export default FacebookIcon
