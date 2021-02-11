import PropTypes from 'prop-types'
import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../color'

type P = {
  onPress: () => void
  buttonColor: string
  text: string
  active?: boolean // TODO 一旦非活性にしておく。
  width?: string
  height?: string
  disabled?: boolean
}

const PButton: FC<P> = (props) => {
  const { onPress, buttonColor, text, disabled } = props
  return (
    <TouchableOpacity
      style={{ ...styles.buttonBlue, backgroundColor: buttonColor, opacity: disabled ? 0.4 : 1 }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PButton

PButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    paddingBottom: 64
  },
  textContainer: { marginBottom: 32 },
  title: { fontSize: 20, lineHeight: 24, fontFamily: 'System', fontWeight: '600', color: Colors.Gray7 },
  buttonBlue: {
    backgroundColor: Colors.Secondary,
    height: 48,
    borderRadius: 40,
    marginBottom: 18,
    justifyContent: 'center',
    width: 280
  },
  buttonPink: {
    backgroundColor: Colors.Secondary2,
    height: 48,
    borderRadius: 40,
    justifyContent: 'center',
    width: 280
  },
  buttonText: { textAlign: 'center', color: Colors.white, fontWeight: '600' }
})
