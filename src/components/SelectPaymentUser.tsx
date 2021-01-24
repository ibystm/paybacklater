import React, { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Colors } from '../color'
import { InputState } from '../Screens/AddPaymentScreen'
import PButton from './PButton'

type P = {
  state: InputState
  setState: Dispatch<SetStateAction<InputState>>
}

export enum ButtonRef {
  Button1 = 'Button1',
  Button2 = 'Button2'
}

const SelectPaymentUser: FC<P> = (props) => {
  const { state, setState } = props
  const [otherButtonDisabled, setOtherButtonDisabled] = useState<ButtonRef>(ButtonRef.Button1)
  const onPressButton1 = useCallback(() => {
    // button2がenableならdisabledにする
    setOtherButtonDisabled(ButtonRef.Button2)
    setState((c) => ({
      ...c,
      paymentUser: 'やすこ'
    }))
  }, [])
  const onPressButton2 = useCallback(() => {
    // button1がenableならdisabledにする
    setOtherButtonDisabled(ButtonRef.Button1)
    setState((c) => ({
      ...c,
      paymentUser: 'ともこ'
    }))
  }, [])

  const active1 = useMemo(() => ButtonRef.Button1 === otherButtonDisabled, [otherButtonDisabled])
  const active2 = useMemo(() => ButtonRef.Button2 === otherButtonDisabled, [otherButtonDisabled])

  const getDisabledStyle = useCallback(
    (disabled: boolean): StyleProp<ViewStyle> => ({
      opacity: disabled ? 0.4 : 1
    }),
    []
  )

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>どちらが支払いましたか？</Text>
      </View>
      <View style={{ alignContent: 'center' }}>
        <PButton onPress={onPressButton1} buttonColor={Colors.Secondary} text={'やすこ'} />
        <PButton onPress={onPressButton2} buttonColor={Colors.Secondary2} text={'ともこ'} />
      </View>
    </View>
  )
}

export default SelectPaymentUser

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
