import React, { FC } from 'react'
import { Dimensions, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { Colors } from '../color'

interface P {
  nextScreen: () => void
  disabled: boolean
}

const getButtonColorStyle = (disabled: boolean): StyleProp<ViewStyle> => ({
  opacity: disabled ? 0.4 : 1
})

const BottomNextButton: FC<P> = (props) => {
  const { nextScreen, disabled } = props
  return (
    <TouchableOpacity
      style={[styles.nextButton, getButtonColorStyle(disabled)]}
      onPress={nextScreen}
      disabled={disabled}
    >
      <Text style={styles.nextButtonText}>次へ</Text>
    </TouchableOpacity>
  )
}
const windowWidth = Dimensions.get('window').width

export default BottomNextButton

const styles = StyleSheet.create({
  nextButton: {
    width: windowWidth,
    height: 80,
    position: 'absolute',
    backgroundColor: Colors.Main,
    justifyContent: 'center'
  },
  nextButtonText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    color: Colors.white
  }
})
