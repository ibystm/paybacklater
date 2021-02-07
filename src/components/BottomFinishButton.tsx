import React, { FC } from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { Colors } from '../color'

type P = {
  onPress: () => void
  disabled: boolean
}

const getButtonColorStyle = (disabled: boolean): StyleProp<ViewStyle> => ({
  opacity: disabled ? 0.4 : 1
})

const BottomFinishButton: FC<P> = (props) => {
  const { onPress, disabled } = props
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.nextButton, getButtonColorStyle(disabled)]}>
      <Text style={styles.nextButtonText}>確定</Text>
    </TouchableOpacity>
  )
}

export default BottomFinishButton

const styles = StyleSheet.create({
  nextButton: {
    // height: 80,
    height: '100%',
    width: '50%',
    backgroundColor: Colors.Secondary,
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
