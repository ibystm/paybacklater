import React, { FC, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { NunitoSans_900Black_Italic, useFonts } from '@expo-google-fonts/nunito-sans'
import { Rubik_500Medium } from '@expo-google-fonts/rubik'
import AppLoading from 'expo-app-loading'
import { Colors } from '../utils/types/color'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
  payOffButton: { marginTop: 48 }
})

const Home: FC = () => {
  let [fontsLoaded] = useFonts({
    NunitoSans_900Black_Italic,
    Rubik_500Medium
  })
  return fontsLoaded ? (
    <View style={styles.container}>
      <View style={styles.titleAreaContainer}>
        <Text style={styles.titleText}>PayBackLater</Text>
      </View>
      <View style={styles.paymentViewBox}>
        <View style={styles.paymentCompleteAttribute}>
          <Text style={styles.previousPaymentComplete}>前回の精算</Text>
          <Text style={styles.previousPaymentComplete}>2020/11/04</Text>
        </View>
        <Text style={styles.totalAmount}>ごまさんに払う金額</Text>
        <View style={styles.paymentCompleteAttribute}>
          <Text style={styles.totalAmountNumber}>¥</Text>
          <Text style={styles.totalAmountNumber}>5,000</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.payOffButton}>
        <Image source={require('../../assets/payOff.png')} />
      </TouchableOpacity>
    </View>
  ) : (
    <AppLoading />
  )
}

export default Home
