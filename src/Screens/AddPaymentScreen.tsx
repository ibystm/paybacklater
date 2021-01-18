import { Rubik_500Medium, useFonts } from '@expo-google-fonts/rubik'
import { useNavigation } from '@react-navigation/native'
import React, { ReactNode, useCallback, useMemo, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import BottomNextButton from '../components/BottomNextButton'
import CloseButton from '../components/icons/CloseButton'
import MyKeyboard from '../components/icons/KeyboardPads'
import { Colors } from '../utils/types/color'

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
  paymentNumber: { color: Colors.Gray8, fontSize: 26, lineHeight: 32, fontFamily: 'Rubik_500Medium' },
  paymentUserText: { fontSize: 16, color: Colors.Gray4 },
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

const AddPaymentScreen = () => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium
  })
  const [currentScreenNumber, setCurrentScreenNumber] = useState<number>(0)
  // 入力内容を保持
  const [inputState, setInputState] = useState<{}>()

  const navigation = useNavigation()
  const goHome = useCallback(() => {
    navigation.goBack()
  }, [])

  const renderScreen: ReactNode = useMemo(() => {
    switch (currentScreenNumber) {
      case 0:
        return <MyKeyboard />
      case 1:
        return <Text>こんちは</Text>
      default:
        return <></>
    }
  }, [currentScreenNumber])

  const nextPage = useCallback(() => {
    setCurrentScreenNumber((c) => c + 1)
  }, [])
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
        <View style={styles.amountArea}>
          <Text style={styles.paymentText}>金額*</Text>
          <Text style={styles.paymentNumber}>5000</Text>
        </View>
        <View style={styles.amountArea}>
          <Text style={styles.paymentUserText}>支払った人*</Text>
          <Text style={styles.paymentNumber}>やすこ</Text>
        </View>
        <View style={styles.amountArea}>
          <Text style={styles.paymentUserText}>カテゴリ</Text>
          <Text style={styles.paymentNumber}></Text>
        </View>
        <View style={styles.amountArea}>
          <Text style={styles.paymentUserText}>メモ</Text>
          <View style={{ borderBottomColor: Colors.Gray8, borderBottomWidth: 1, width: 200, marginBottom: 16 }}>
            <TextInput />
          </View>
        </View>
        <View style={styles.amountArea}>
          <Text style={styles.paymentUserText}>固定費に追加</Text>
          <TouchableOpacity style={{ height: 24 }}>
            <Text style={{ color: Colors.Gray8, fontFamily: 'System', fontSize: 16 }}>設定{' > '}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.keyboardAreaContainer}>
        {renderScreen}
        <BottomNextButton nextScreen={nextPage} />
      </View>
    </View>
  ) : (
    <></>
  )
}

export default AddPaymentScreen
