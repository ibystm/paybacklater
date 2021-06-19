import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../color'

type P = {
  isActive: boolean
}

const Dot: React.VFC<P> = (props) => {
  const { isActive } = props
  return (
    <View
      style={{
        ...styles.dot,
        backgroundColor: isActive ? Colors.Secondary : Colors.Gray6
      }}
    />
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    marginHorizontal: 3
  }
})

export default Dot
