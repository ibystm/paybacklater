import { Rubik_500Medium, useFonts } from '@expo-google-fonts/rubik'
import { useNavigation } from '@react-navigation/native'
import React, { FC, ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextStyle, View } from 'react-native'
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { FixedCostSettings } from '../api/types/apiTypes'
import { Colors } from '../color'
import BottomNextButton from '../components/BottomNextButton'
import CategoryBoard from '../components/CategoryBoard'
import ChipLabel from '../components/ChipLabel'
import CloseButton from '../components/icons/CloseButton'
import MyKeyboard from '../components/icons/KeyboardPads'
import SelectPaymentUser from '../components/SelectPaymentUser'
import { Category, inputCategoryToText } from '../types/CategoryTypes'

const styles = StyleSheet.create({
  container: { flex: 0.5, backgroundColor: '#fff' },
  areaWrapper: { flex: 7, paddingTop: 24, paddingHorizontal: 32, backgroundColor: '#fff' },
  upperArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  addText: { alignItems: 'center', color: Colors.Main, fontSize: 16, fontWeight: 'bold' },
  closeButton: { height: 24 },
  amountArea: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, height: 32 },
  paymentText: { fontSize: 16, fontWeight: '500', color: Colors.Main },
  paymentNumber: { color: Colors.Gray8, fontSize: 24, lineHeight: 32, fontFamily: 'Rubik_500Medium', paddingRight: 8 },
  categoryText: { fontSize: 16, fontFamily: 'System' },
  paymentUserText: { fontSize: 16, color: Colors.Gray8, fontWeight: '500' },
  keyboardAreaContainer: {
    flex: 7,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 32,
    paddingTop: 16,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10
    },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    alignItems: 'center'
  }
})

export enum CurrentScreenDef {
  KeyBoard = 'KeyBoard',
  SelectPaymentUser = 'SelectPaymentUser',
  SelectCategory = 'SelectCategory',
  Memo = 'Memo',
  AddFixedCost = 'AddFixedCost'
}

export type InputState = {
  amount: string
  paymentUser: string
  category: Category
  memo: string
  fixedCostSetting: FixedCostSettings
}

const initialInputState: InputState = {
  amount: '0',
  paymentUser: '',
  category: 'food',
  memo: '',
  fixedCostSetting: 'none'
}

const getTextStyles = (isAreaFocused: boolean): TextStyle => {
  return {
    color: isAreaFocused ? Colors.Main : Colors.Gray8
  }
}

const AddPaymentScreen: FC = () => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium
  })
  const [currentScreen, setCurrentScreen] = useState<CurrentScreenDef>(CurrentScreenDef.KeyBoard)
  // 入力内容を保持
  const [inputState, setInputState] = useState<InputState>(initialInputState)
  const ref = useRef<TextInput>(null)

  const navigation = useNavigation()
  const goHome = useCallback(() => {
    navigation.goBack()
  }, [])

  const renderScreen: ReactNode = useMemo(() => {
    switch (currentScreen) {
      case CurrentScreenDef.KeyBoard:
        return <MyKeyboard state={inputState} setState={setInputState} />
      case CurrentScreenDef.SelectPaymentUser:
        return <SelectPaymentUser state={inputState} setState={setInputState} />
      case CurrentScreenDef.SelectCategory:
        return <CategoryBoard state={inputState} setState={setInputState} />
      case CurrentScreenDef.Memo:
      case CurrentScreenDef.AddFixedCost:
      default:
        return <></>
    }
  }, [currentScreen, inputState])

  const nextPage = useCallback(() => {
    switch (currentScreen) {
      case CurrentScreenDef.KeyBoard:
        return setCurrentScreen(CurrentScreenDef.SelectPaymentUser)
      case CurrentScreenDef.SelectPaymentUser:
        return setCurrentScreen(CurrentScreenDef.SelectCategory)
      case CurrentScreenDef.SelectCategory:
        // @ts-ignore TextInput componentにfocus()メソッドあるのにtypescriptに怒られまくるのでignore
        ref.current.focus()
        return setCurrentScreen(CurrentScreenDef.Memo)
      case CurrentScreenDef.Memo:
      case CurrentScreenDef.AddFixedCost:
      default:
        return
    }
  }, [currentScreen])

  const disabled = useMemo(() => {
    switch (currentScreen) {
      case CurrentScreenDef.KeyBoard:
        return inputState.amount === '0' || inputState.amount === ''

      default:
        return false
    }
  }, [currentScreen, inputState.amount])

  const onChangeText = useCallback((text: string) => {
    setInputState((c) => ({
      ...c,
      memo: text
    }))
  }, [])

  const onFocusMemo = useCallback(() => setCurrentScreen(CurrentScreenDef.Memo), [])
  // @ts-ignore typescriptに怒られるのでignore,良いsolutionがあったら外したい
  const onEnterMemo = useCallback(() => ref.current.blur(), [])

  return fontsLoaded ? (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} />
      <View style={styles.areaWrapper}>
        <View style={styles.upperArea}>
          <View />
          <Text style={styles.addText}>追加</Text>
          <TouchableOpacity style={styles.closeButton} onPress={goHome}>
            <CloseButton />
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback style={styles.amountArea} onPress={() => setCurrentScreen(CurrentScreenDef.KeyBoard)}>
          <Text style={[styles.paymentText, getTextStyles(CurrentScreenDef.KeyBoard == currentScreen)]}>金額*</Text>
          <TextInput
            value={inputState.amount}
            onChangeText={() => {}}
            // onKeyPress={() => setCurrentScreen(CurrentScreenDef.KeyBoard)}
            showSoftInputOnFocus={false} // keyboardをoffるprops
            editable={false} // keyboardをoffるprops
            style={styles.paymentNumber}
          />
        </TouchableWithoutFeedback>
        <View style={styles.amountArea}>
          <Text style={[styles.paymentUserText, getTextStyles(CurrentScreenDef.SelectPaymentUser === currentScreen)]}>
            支払った人*
          </Text>
          {!!inputState.paymentUser && <ChipLabel label={inputState.paymentUser} color={Colors.Secondary} />}
        </View>
        <View style={styles.amountArea}>
          <Text style={[styles.paymentUserText, getTextStyles(CurrentScreenDef.SelectCategory === currentScreen)]}>
            カテゴリ
          </Text>
          <TextInput
            value={inputState.category ? inputCategoryToText(inputState.category) : ''}
            onChangeText={() => {}}
            showSoftInputOnFocus={false} // keyboardをoffるprops
            // editable={false} // keyboardをoffるprops
            style={styles.categoryText}
          />
        </View>
        <View style={styles.amountArea}>
          <Text style={styles.paymentUserText}>メモ</Text>
          <View
            style={{ borderBottomColor: Colors.Gray8, borderBottomWidth: 1, width: 200, marginBottom: 16, height: 24 }}
          >
            <TextInput
              ref={ref}
              onChangeText={onChangeText}
              onFocus={onFocusMemo}
              numberOfLines={1}
              onSubmitEditing={onEnterMemo}
              returnKeyType="next"
              placeholder="メモ"
            >
              <Text ellipsizeMode="tail">{inputState.memo}</Text>
            </TextInput>
          </View>
        </View>
        <View style={styles.amountArea}>
          <Text style={styles.paymentUserText}>固定費に追加</Text>
          <TouchableOpacity style={{ height: 24 }}>
            <Text style={{ color: Colors.Gray8, fontFamily: 'System', fontSize: 16 }}>設定{' > '}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {currentScreen !== CurrentScreenDef.Memo && (
        <View style={styles.keyboardAreaContainer}>
          {renderScreen}
          <BottomNextButton nextScreen={nextPage} disabled={disabled} />
        </View>
      )}
    </View>
  ) : (
    <></>
  )
}

export default AddPaymentScreen
