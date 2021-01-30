import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import CloseButtonIcon from './icons/CloseButtonIcon'

type P = {
  onPressClose: () => void
}

const CloseButton: FC<P> = ({ onPressClose }) => {
  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPressClose}>
      <CloseButtonIcon />
    </TouchableOpacity>
  )
}

export default CloseButton

const styles = StyleSheet.create({
  closeButton: { height: 24 }
})
