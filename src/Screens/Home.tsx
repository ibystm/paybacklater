import React, { FC, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { NunitoSans_900Black_Italic, useFonts } from '@expo-google-fonts/nunito-sans'
import AppLoading from 'expo-app-loading'
import { Colors } from '../utils/types/color'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 16 },
  titleAreaContainer: { height: 48, marginBottom: 48 },
  titleText: {
    fontSize: 32,
    fontFamily: 'NunitoSans_900Black_Italic',
    color: Colors.Main,
    fontStyle: 'italic'
  },
  paymentViewBox: {
    height: 216,
    width: 288,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 1,
    shadowColor: 'black',
    backgroundColor: 'gray'
  },
  payOffButton: { marginTop: 48 }
})

const Home: FC = () => {
  let [fontsLoaded] = useFonts({
    NunitoSans_900Black_Italic
  })
  return fontsLoaded ? (
    <View style={styles.container}>
      <View style={styles.titleAreaContainer}>
        <Text style={styles.titleText}>PayBackLater</Text>
      </View>
      <View style={styles.paymentViewBox}></View>
      <TouchableOpacity style={styles.payOffButton}>
        <Image source={require('../../assets/payOff.png')} />
      </TouchableOpacity>
    </View>
  ) : (
    <AppLoading />
  )
}

export default Home
