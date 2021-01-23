import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../color'

type P = {
  label: string
  color: string
  onPress?: () => void
}

const ChipLabel: FC<P> = ({ label, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.button, backgroundColor: color }}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ChipLabel

const styles = StyleSheet.create({
  button: {
    maxWidth: 96,
    borderRadius: 20,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  text: { fontWeight: '800', fontSize: 14, lineHeight: 24, color: Colors.white }
})
