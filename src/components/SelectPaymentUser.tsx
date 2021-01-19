import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { InputState } from '../Screens/AddPaymentScreen'
import { Colors } from '../utils/types/color'

type P = {
  state: InputState
  setState: Dispatch<SetStateAction<InputState>>
}

const SelectPaymentUser: FC<P> = (props) => {
  const { state, setState } = props
  const onPressButton1 = useCallback(() => {
    return setState((c) => ({
      ...c,
      paymentUser: 'やすこ'
    }))
  }, [])
  const onPressButton2 = useCallback(() => {
    return setState((c) => ({
      ...c,
      paymentUser: 'ともこ'
    }))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>どちらが支払いましたか？</Text>
      </View>
      <TouchableOpacity style={styles.buttonBlue} onPress={onPressButton1}>
        <Text style={styles.buttonText}>やすこ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPink} onPress={onPressButton2}>
        <Text style={styles.buttonText}>ともこ</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectPaymentUser

const styles = StyleSheet.create({
  container: { paddingHorizontal: 40, width: '100%' },
  textContainer: { marginBottom: 32 },
  title: { fontSize: 20, lineHeight: 24, fontFamily: 'System', fontWeight: '600', color: Colors.Gray7 },
  buttonBlue: {
    backgroundColor: Colors.Secondary,
    height: 48,
    borderRadius: 40,
    marginBottom: 18,
    justifyContent: 'center'
  },
  buttonPink: { backgroundColor: Colors.Secondary2, height: 48, borderRadius: 40, justifyContent: 'center' },
  buttonText: { textAlign: 'center', color: Colors.white, fontWeight: '600' }
})
