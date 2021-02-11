import { Rubik_500Medium, useFonts } from '@expo-google-fonts/rubik'
import { AntDesign, Feather, Ionicons, Octicons, SimpleLineIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextStyle, View } from 'react-native'
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'
import { Colors } from '../color'
import BottomFinishButton from '../components/BottomFinishButton'
import BottomNextButton from '../components/BottomNextButton'
import CategoryBoard from '../components/CategoryBoard'
import ChipLabel from '../components/ChipLabel'
import MyKeyboard from '../components/icons/KeyboardPads'
import PButton from '../components/PButton'
import SelectPaymentUser from '../components/SelectPaymentUser'
import { Category, inputCategoryToText } from '../types/CategoryTypes'
import { FixedCostSettings } from '../types/FixedCostSettingTypes'
import { DISPLAY_WIDTH } from '../utils/utils'

const styles = StyleSheet.create({
  container: { flex: 0.5, backgroundColor: '#fff' },
  areaWrapper: { flex: 4, paddingTop: 24, paddingHorizontal: 32, backgroundColor: '#fff' },
  upperArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  addText: { alignItems: 'center', color: Colors.Main, fontSize: 16, fontWeight: 'bold' },
  closeButton: { height: 24 },
  amountArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    height: 32,
    alignItems: 'center'
  },
  icon: { paddingRight: 8 },
  iconWrapper: { flexDirection: 'row', alignItems: 'center' },
  paymentText: { fontSize: 16, fontWeight: '600', color: Colors.Gray8, lineHeight: 24 },
  requiredText: { fontWeight: '600' },
  paymentNumber: { color: Colors.Gray8, fontSize: 24, lineHeight: 32, fontFamily: 'Rubik_500Medium', paddingRight: 8 },
  categoryText: { fontSize: 16, fontFamily: 'System' },
  paymentUserText: { fontSize: 16, color: Colors.Gray8, fontWeight: 'normal', lineHeight: 24 },
  keyboardAreaContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 344, // 高さは固定でもたせるのかはだいぶ悩ましいからFIXME
    justifyContent: 'flex-end',
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
  },
  fixedCostArea: {
    flex: 3,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  settingText: { color: Colors.Gray8, fontFamily: 'System', fontSize: 16 },
  memoArea: { borderBottomColor: Colors.Gray8, borderBottomWidth: 1, width: 160, marginBottom: 16, height: 24 }
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
  const [fontsLoaded] = useFonts({
    Rubik_500Medium
  })
  const [currentScreen, setCurrentScreen] = useState<CurrentScreenDef>(CurrentScreenDef.KeyBoard)
  // 入力内容を保持
  const [inputState, setInputState] = useState<InputState>(initialInputState)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputDone, setInputDone] = useState<boolean>(false)
  const ref = useRef<TextInput>(null)

  const navigation = useNavigation()

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
        // @ts-ignore TextInput componentにfocus()メソッドあるのにtypescriptに怒られまくるのでignore。多分react-native側のバグ
        ref.current.focus()
        return setCurrentScreen(CurrentScreenDef.Memo)
      case CurrentScreenDef.Memo:
        return setCurrentScreen(CurrentScreenDef.AddFixedCost)
      case CurrentScreenDef.AddFixedCost:
      default:
        return
    }
  }, [currentScreen])

  const disabled = useMemo(() => {
    switch (currentScreen) {
      case CurrentScreenDef.KeyBoard:
        return inputState.amount === '0' || inputState.amount === ''
      case CurrentScreenDef.SelectPaymentUser:
        return !inputState.paymentUser
      default:
        return false
    }
  }, [currentScreen, inputState.amount, inputState.paymentUser])

  const onChangeText = useCallback((text: string) => {
    setInputState((c) => ({
      ...c,
      memo: text
    }))
  }, [])
  const onFocusMemo = useCallback(() => setCurrentScreen(CurrentScreenDef.Memo), [])
  const onEnterMemo = useCallback(() => {
    // @ts-ignore typescriptに怒られるのでignore,良いsolutionがあったら外したい
    ref.current.blur()
    setCurrentScreen(CurrentScreenDef.AddFixedCost)
  }, [])

  const onPressAddFixedCost = useCallback(
    () =>
      navigation.navigate('FixedCostScreen', {
        selectedSettings: inputState.fixedCostSetting,
        setState: setInputState
      }),
    [inputState.fixedCostSetting, navigation]
  )
  const onTapPaymentUser = useCallback(() => setCurrentScreen(CurrentScreenDef.SelectPaymentUser), [])
  const onTapCategoryArea = useCallback(() => setCurrentScreen(CurrentScreenDef.SelectCategory), [])
  const onSavePayment = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigation.navigate('AppContainer', { isSaveDone: true })
    }, 2000)
  }, [navigation])
  const fixedCostTypeToText = useCallback(() => {
    switch (inputState.fixedCostSetting) {
      case 'beginningOfMonth':
        return '月初'
      case 'middleOfMonth':
        return '15日'
      case 'endOfMonth':
        return '月末'
      case 'none':
        return '未設定'
      default:
        new Error('invalid fixedCost type.')
    }
  }, [inputState.fixedCostSetting])
  const canFinish = useMemo(() => currentScreen !== CurrentScreenDef.KeyBoard, [currentScreen])
  const OnTapInputDone = useCallback(() => {
    setInputDone(true)
  }, [])

  const [saveButtonDisabled, setSaveButtonDisabled] = useState<boolean>(false)

  useEffect(() => {
    if (!inputState.amount || !inputState.paymentUser) {
      setSaveButtonDisabled(true)
    } else {
      setSaveButtonDisabled(false)
    }
  }, [inputState.amount, inputState.paymentUser])

  return fontsLoaded ? (
    <>
      <Spinner visible={isLoading} textContent="保存中" textStyle={{ color: 'white' }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
        <View style={styles.areaWrapper}>
          <TouchableWithoutFeedback
            style={styles.amountArea}
            onPress={() => setCurrentScreen(CurrentScreenDef.KeyBoard)}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name="md-logo-yen" size={15} color={Colors.Gray8} style={styles.icon} />
              <Text style={[styles.paymentText, getTextStyles(CurrentScreenDef.KeyBoard == currentScreen)]}>金額*</Text>
            </View>
            <TextInput
              value={inputState.amount}
              onChangeText={() => {}}
              showSoftInputOnFocus={false} // keyboardをoffるprops
              editable={false} // keyboardをoffるprops
              style={styles.paymentNumber}
            />
          </TouchableWithoutFeedback>
          <View style={styles.amountArea}>
            <View style={styles.iconWrapper}>
              <Ionicons name="person-outline" size={16} color="black" style={styles.icon} />
              <Text style={[styles.paymentText, getTextStyles(CurrentScreenDef.SelectPaymentUser === currentScreen)]}>
                支払った人*
              </Text>
            </View>
            {!!inputState.paymentUser && (
              <TouchableOpacity onPress={onTapPaymentUser}>
                <ChipLabel label={inputState.paymentUser} color={Colors.Secondary} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.amountArea}>
            <View style={styles.iconWrapper}>
              <Feather name="folder" size={16} color="black" style={styles.icon} />
              <Text style={[styles.paymentUserText, getTextStyles(CurrentScreenDef.SelectCategory === currentScreen)]}>
                カテゴリ
              </Text>
            </View>
            <TouchableOpacity onPress={onTapCategoryArea}>
              <Text style={styles.categoryText}>
                {inputState.category ? inputCategoryToText(inputState.category) : ''}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.amountArea}>
            <View style={styles.iconWrapper}>
              <SimpleLineIcons name="pencil" size={16} color="black" style={styles.icon} />
              <Text style={[styles.paymentUserText, getTextStyles(CurrentScreenDef.Memo === currentScreen)]}>メモ</Text>
            </View>
            <View style={styles.memoArea}>
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
            <View style={styles.iconWrapper}>
              <Octicons name="graph" size={16} color="black" style={styles.icon} />
              <Text style={[styles.paymentUserText, getTextStyles(CurrentScreenDef.AddFixedCost === currentScreen)]}>
                固定費に追加
              </Text>
            </View>
            <TouchableOpacity onPress={onPressAddFixedCost} style={{ height: 24, flexDirection: 'row' }}>
              <Text style={styles.settingText}>{fixedCostTypeToText()}</Text>
              <AntDesign name="right" size={14} color={Colors.Gray8} style={{ top: 2, marginLeft: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
        {currentScreen !== CurrentScreenDef.Memo && currentScreen !== CurrentScreenDef.AddFixedCost && !inputDone && (
          <View style={styles.keyboardAreaContainer}>
            <View style={{ paddingVertical: 16 }}>{renderScreen}</View>
            <View style={{ height: 80, flexDirection: 'row', width: DISPLAY_WIDTH }}>
              {canFinish && <BottomFinishButton disabled={disabled} onPress={OnTapInputDone} />}
              <BottomNextButton nextScreen={nextPage} disabled={disabled} canFinish={canFinish} />
            </View>
          </View>
        )}
        {(currentScreen === CurrentScreenDef.AddFixedCost || inputDone) && (
          <View style={styles.fixedCostArea}>
            <PButton text="保存する" onPress={onSavePayment} buttonColor={Colors.Main} disabled={saveButtonDisabled} />
          </View>
        )}
      </ScrollView>
    </>
  ) : (
    <></>
  )
}

export default AddPaymentScreen
