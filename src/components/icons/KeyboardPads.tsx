import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../utils/types/color'

type P = {}

const MyKeyboard: FC<P> = () => {
  const onPress1 = ({}) => {
    // insertText(.props.tag, '1')
  }

  const onPress2 = () => {
    // insertText(.props.tag, '2')
  }

  const onPress3 = () => {
    // insertText(.props.tag, '3')
  }

  const onPress4 = () => {
    // insertText(.props.tag, '4')
  }

  const onPress5 = () => {
    // insertText(.props.tag, '5')
  }

  const onPress6 = () => {
    // insertText(.props.tag, '6')
  }

  const onPress7 = () => {
    // insertText(.props.tag, '7')
  }

  const onPress8 = () => {
    // insertText(.props.tag, '8')
  }

  const onPress9 = () => {
    // insertText(.props.tag, '9')
  }

  const onPressBackSpace = () => {
    // backSpace(.props.tag)
  }

  const onPress0 = () => {
    // insertText(.props.tag, '0')
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
      </View>
    </View>
  )
}

export default MyKeyboard

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 16,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10
    },
    shadowColor: '#000000',
    shadowOpacity: 0.1
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
