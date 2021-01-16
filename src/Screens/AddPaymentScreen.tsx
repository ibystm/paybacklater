import { Rubik_500Medium, useFonts } from '@expo-google-fonts/rubik'
import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CloseButton from '../components/icons/CloseButton'
import MyKeyboard from '../components/icons/KeyboardPads'
import { Colors } from '../utils/types/color'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  areaWrapper: { paddingTop: 24, paddingHorizontal: 32 },
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
  paymentUserText: { fontSize: 16, color: Colors.Gray4 }
})

const AddPaymentScreen = () => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium
  })

  const navigation = useNavigation()
  const goHome = useCallback(() => {
    navigation.goBack()
  }, [])

  return fontsLoaded ? (
    <SafeAreaView style={styles.container}>
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
        <MyKeyboard />
      </View>
    </SafeAreaView>
  ) : (
    <></>
  )
}

export default AddPaymentScreen
