import { NunitoSans_900Black_Italic, useFonts } from '@expo-google-fonts/nunito-sans'
import { Rubik_500Medium } from '@expo-google-fonts/rubik'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import SwitchSelector from 'react-native-switch-selector'
import { Colors } from '../color'
import PayOffButton from '../components/icons/PayOffButton'
import { FirestoreUsersTypes } from '../db/firestoreTypes/firestoreUsersTypes'
import { UsersService } from '../services/usersService'

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

type P = {
  saveDone?: boolean
}

const Home: React.VFC<P> = (props) => {
  const { saveDone } = props
  const [fontsLoaded] = useFonts({
    NunitoSans_900Black_Italic,
    Rubik_500Medium
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [loginUser, setloginUser] = useState<boolean>(true)
  const [user, setUser] = useState<FirestoreUsersTypes>()
  const switchOptions = useMemo(
    () => [
      { label: 'ごま', value: 'f' },
      { label: 'やすこ', value: 'm' }
    ],
    []
  )

  const [paymentComplete, setPaymentComplete] = useState<boolean>(!!saveDone)

  useEffect(() => {
    UsersService.getUsersTotalDebts('Oe6XKXl31y9TFvMdMADo').then((res) => {
      console.log('res', res)
      setUser(res)
    })
  }, [])
  const onTapPaymentDone = useCallback(() => setPaymentComplete(false), [])

  return fontsLoaded && isLoading ? (
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
              setloginUser(!loginUser)
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
        <Text style={styles.totalAmount}>{loginUser ? user?.totalDebts : 'やすこ'}さんに払う金額</Text>
        <View style={styles.paymentCompleteAttribute}>
          <Text style={styles.totalAmountNumber}>¥</Text>
          <Text style={styles.totalAmountNumber}>{loginUser ? user?.totalDebts : 2000}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.payOffButton}>
        <PayOffButton />
      </TouchableOpacity>
      <Modal isVisible={paymentComplete}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              height: 216,
              width: 216,
              backgroundColor: '#fff',
              borderRadius: 20,
              alignItems: 'center'
            }}
          >
            <View style={{ marginTop: 32 }}>
              <Image source={require('../../assets/images/check-icon.png')} width={64} height={64} />
            </View>
            <Text style={{ marginVertical: 16, fontSize: 16, fontWeight: '600', lineHeight: 22, color: Colors.Gray7 }}>
              入力が完了しました！
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.Main,
                width: 160,
                height: 32,
                justifyContent: 'center',
                borderRadius: 30,
                marginBottom: 24
              }}
              onPress={onTapPaymentDone}
            >
              <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '600' }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  ) : (
    <></>
  )
}

export default Home
