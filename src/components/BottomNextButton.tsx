import React, { FC } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../utils/types/color'

interface P {
  nextScreen: () => void
}
const BottomNextButton: FC<P> = (props) => {
  const { nextScreen } = props
  return (
    <TouchableOpacity style={styles.nextButton} onPress={nextScreen}>
      <Text style={styles.nextButtonText}>次へ</Text>
    </TouchableOpacity>
  )
}
const windowWidth = Dimensions.get('window').width

export default BottomNextButton

const styles = StyleSheet.create({
  nextButton: {
    flex: 0.5,
    width: windowWidth,
    height: 56,
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.Main,
    justifyContent: 'center'
    // alignItems: 'center'
  },
  nextButtonText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    color: '#fff'
  }
})
