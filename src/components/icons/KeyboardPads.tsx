import React, { Dispatch, FC, SetStateAction } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InputState } from '../../Screens/AddPaymentScreen'
import { Colors } from '../../utils/types/color'

type P = {
  state: InputState
  setState: Dispatch<SetStateAction<InputState>>
}

const initialAmount = '0'

const MyKeyboard: FC<P> = (props) => {
  const { state, setState } = props
  const onPress1 = (): void => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '1' : c.amount + 1
    }))
  }

  const onPress2 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '2' : c.amount + 2
    }))
  }

  const onPress3 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '3' : c.amount + 3
    }))
  }

  const onPress4 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '4' : c.amount + 4
    }))
  }

  const onPress5 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '5' : c.amount + 5
    }))
  }

  const onPress6 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '6' : c.amount + 6
    }))
  }

  const onPress7 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '7' : c.amount + 7
    }))
  }

  const onPress8 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '8' : c.amount + 8
    }))
  }

  const onPress9 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '9' : c.amount + 9
    }))
  }

  const onPress0 = () => {
    return setState((c) => ({
      ...c,
      amount: c.amount === initialAmount ? '0' : c.amount + 0
    }))
  }

  const onPressClear = () => {
    setState((c) => ({
      ...c,
      amount: '0'
    }))
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress7}>
            <Text style={styles.buttonLabel}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress8}>
            <Text style={styles.buttonLabel}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress9}>
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
          <TouchableOpacity onPress={onPress1}>
            <Text style={styles.buttonLabel}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress2}>
            <Text style={styles.buttonLabel}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onPress3}>
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
          <TouchableOpacity onPress={onPressClear}>
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
