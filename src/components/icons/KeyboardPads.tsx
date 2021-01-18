import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../utils/types/color'

type P = {}

const MyKeyboard: FC<P> = () => {
  const onPress1 = (): string => {
    return ''
  }

  const onPress2 = (): string => {
    return ''
  }

  const onPress3 = (): string => {
    return ''
  }

  const onPress4 = (): string => {
    return ''
  }

  const onPress5 = (): string => {
    return ''
  }

  const onPress6 = (): string => {
    return ''
  }

  const onPress7 = (): string => {
    return ''
  }

  const onPress8 = (): string => {
    return ''
  }

  const onPress9 = (): string => {
    return ''
  }

  const onPressBackSpace = (): string => {
    return ''
  }

  const onPress0 = (): string => {
    return ''
  }

  const onPressHideKeyboard = () => {
    // hideKeyboard(.props.tag)
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress1}>
            <Text style={styles.buttonLabel}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress2}>
            <Text style={styles.buttonLabel}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress3}>
            <Text style={styles.buttonLabel}>9</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress4}>
            <Text style={styles.buttonLabel}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress5}>
            <Text style={styles.buttonLabel}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress6}>
            <Text style={styles.buttonLabel}>6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress7}>
            <Text style={styles.buttonLabel}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress8}>
            <Text style={styles.buttonLabel}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress9}>
            <Text style={styles.buttonLabel}>3</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.button} />
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress0}>
            <Text style={styles.buttonLabel}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.buttonLabel}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MyKeyboard

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'grey',
    width: 270,
    fontSize: 19
  },
  buttonLabel: {
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 24,
    color: Colors.Main
  },
  button: {
    width: '33.333333333%'
  }
})
