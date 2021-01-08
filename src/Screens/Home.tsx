import React, { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import * as Expo from 'expo'
import { NunitoSans_900Black_Italic, useFonts } from '@expo-google-fonts/nunito-sans'
import AppLoading from 'expo-app-loading'
import { Colors } from '../utils/types/color'

const Home: FC = () => {
  let [fontsLoaded] = useFonts({
    NunitoSans_900Black_Italic
  })
  return fontsLoaded ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32, fontFamily: 'NunitoSans_900Black_Italic', color: Colors.Main, fontStyle: 'italic' }}>
        PayBackLater
      </Text>
    </View>
  ) : (
    <AppLoading />
  )
}

export default Home
