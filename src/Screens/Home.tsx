import React, { FC, useEffect, useMemo, useState } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { NunitoSans_900Black_Italic, useFonts } from '@expo-google-fonts/nunito-sans'
import { Rubik_500Medium } from '@expo-google-fonts/rubik'
import AppLoading from 'expo-app-loading'
import { Colors } from '../utils/types/color'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SwitchSelector from 'react-native-switch-selector'
import { UsersService } from '../services/usersService'
import PayOffButton from '../components/icons/PayOffButton'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 16, backgroundColor: '#ffff' },
  titleAreaContainer: { height: 48, marginBottom: 48 },
  titleText: {
    fontSize: 32,
    fontFamily: 'NunitoSans_900Black_Italic',
    color: Colors.Main,
    fontStyle: 'italic'
  },

  paymentViewBox: {
    padding: 24,
    height: 216,
    width: 288,
    borderRadius: 20,
    shadowOffset: {
      width: 0.5,
      height: 10
    },
    shadowRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    backgroundColor: '#ffff'
  },
  previousPaymentComplete: { fontFamily: 'Rubik_500Medium', color: Colors.Gray5, fontSize: 14, marginBottom: 8 },
  totalAmountNumber: {
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Rubik_500Medium',
    lineHeight: 38.2,
    color: Colors.Gray8
  },
  totalAmount: { fontSize: 16, lineHeight: 24, fontFamily: 'System', fontWeight: '600', marginBottom: 16 },
  paymentCompleteAttribute: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalAmountBoxArea: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  payOffButton: { marginTop: 48 },
  userSwitch: { marginBottom: 18, justifyContent: 'center', alignItems: 'center' }
})

const Home: FC = () => {
  let [fontsLoaded] = useFonts({
    NunitoSans_900Black_Italic,
    Rubik_500Medium
  })
  const [activeUser, setActiveUser] = useState<boolean>(true)
  const [user, setUser] = useState<any>()
  const switchOptions = useMemo(
    () => [
      { label: 'ごま', value: 'f' },
      { label: 'やすこ', value: 'm' }
    ],
    []
  )

  useEffect(() => {
    UsersService.getUsersTotalDebts('Oe6XKXl31y9TFvMdMADo').then((res) => {
      setUser(res)
    })
  }, [activeUser])

  return fontsLoaded ? (
    <View style={styles.container}>
      <View style={styles.titleAreaContainer}>
        <Text style={styles.titleText}>PayBackLater</Text>
      </View>
      <View style={styles.paymentViewBox}>
        <View style={styles.userSwitch}>
          <SwitchSelector
            style={{ width: 160 }}
            initial={0}
            onPress={() => {
              setActiveUser(!activeUser)
            }}
            textColor={Colors.Secondary}
            selectedColor="#fff"
            buttonColor={Colors.Secondary}
            borderColor={Colors.Secondary}
            borderRadius={10}
            animationDuration={300}
            bold={true}
            valuePadding={0}
            hasPadding={true}
            height={28}
            options={switchOptions}
          />
        </View>
        <View style={styles.paymentCompleteAttribute}>
          <Text style={styles.previousPaymentComplete}>前回の精算</Text>
          <Text style={styles.previousPaymentComplete}>2020/11/04</Text>
        </View>
        <Text style={styles.totalAmount}>{activeUser ? user?.name : 'やすこ'}さんに払う金額</Text>
        <View style={styles.paymentCompleteAttribute}>
          <Text style={styles.totalAmountNumber}>¥</Text>
          <Text style={styles.totalAmountNumber}>{activeUser ? 6000 : 2000}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.payOffButton}>
        <PayOffButton />
      </TouchableOpacity>
    </View>
  ) : (
    <AppLoading />
  )
}

export default Home
