import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../utils/types/color'

const BottomNextButton = () => {
  return (
    <TouchableOpacity style={styles.nextButton}>
      <Text style={styles.nextButtonText}>次へ</Text>
    </TouchableOpacity>
  )
}

export default BottomNextButton

const styles = StyleSheet.create({
  nextButton: {
    flex: 0.5,
    width: '100%',
    height: 64,
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
