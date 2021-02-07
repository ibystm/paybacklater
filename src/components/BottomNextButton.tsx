import React, { FC } from 'react'
import { Dimensions, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { Colors } from '../color'

interface P {
  nextScreen: () => void
  disabled: boolean
  canFinish: boolean
}

const getButtonColorStyle = (disabled: boolean): StyleProp<ViewStyle> => ({
  opacity: disabled ? 0.4 : 1
})

const getWidth = (canFinish: boolean): StyleProp<ViewStyle> => ({
  width: canFinish ? '50%' : '100%'
})

const BottomNextButton: FC<P> = (props) => {
  const { nextScreen, disabled, canFinish } = props
  return (
    <TouchableOpacity
      style={[styles.nextButton, getButtonColorStyle(disabled), getWidth(canFinish)]}
      onPress={nextScreen}
      disabled={disabled}
    >
      <Text style={styles.nextButtonText}>次へ</Text>
    </TouchableOpacity>
  )
}
const HALF_SCREEN = Dimensions.get('window').width / 2

export default BottomNextButton

const styles = StyleSheet.create({
  nextButton: {
    // height: 80,
    height: '100%',
    // position: 'absolute',
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
