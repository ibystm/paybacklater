import { RouteProp } from '@react-navigation/native'
import {
  createStackNavigator,
  StackCardInterpolatedStyle,
  StackCardInterpolationProps,
  StackNavigationProp
} from '@react-navigation/stack'
import React, { Dispatch, SetStateAction } from 'react'
import { Animated, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../color'
import CloseButtonIcon from '../../components/icons/CloseButtonIcon'
import { FixedCostSettings } from '../../types/FixedCostSettingTypes'
import AddPaymentScreen, { InputState } from '../AddPaymentScreen'
import FixedCostScreen from '../FixedCostScreen'
import AppContainer from './AppContainer'

type RootStackParamList = {
  AppContainer: undefined
  AddPaymentScreen: undefined
  FixedCostScreen: { selectedSettings: FixedCostSettings; setState: Dispatch<SetStateAction<InputState>> }
}

export type AddPaymentScreenRouteProps = RouteProp<RootStackParamList, 'AddPaymentScreen'>
export type FixedCostScreenRouteProps = RouteProp<RootStackParamList, 'FixedCostScreen'>

export type AddPaymentScreenNavigationProps = StackNavigationProp<RootStackParamList, 'AddPaymentScreen'>
export type FixedCostScreenNavigationProps = StackNavigationProp<RootStackParamList, 'FixedCostScreen'>

const RootStacks = () => {
  const Stack = createStackNavigator<RootStackParamList>()
  // TODO userの存在チェックをかける
  const user = true
  return (
    <Stack.Navigator mode="modal" screenOptions={{ animationEnabled: false }} headerMode="screen">
      {user ? (
        <Stack.Screen
          name="AppContainer"
          component={AppContainer}
          options={{
            headerShown: false
          }}
        />
      ) : (
        <></>
      )}
      <Stack.Screen
        name="AddPaymentScreen"
        component={AddPaymentScreen}
        options={({ navigation }) => ({
          title: '追加',
          animationEnabled: true,
          headerRight: () => (
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
              <CloseButtonIcon />
            </TouchableOpacity>
          ),
          headerStyle: {
            shadowColor: 'transparent'
          },
          headerBackTitleVisible: false,
          headerTintColor: Colors.Main,
          headerLeft: () => null
        })}
      />
      <Stack.Screen
        name="FixedCostScreen"
        component={FixedCostScreen}
        options={{
          title: '固定費',
          headerShown: true,
          headerStyle: {
            shadowColor: 'transparent'
          },
          headerTintColor: Colors.Main,
          headerLeftContainerStyle: {
            marginLeft: 16
          },
          headerBackTitleVisible: false,
          animationEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStacks

const styles = StyleSheet.create({
  closeButton: {
    height: 40,
    width: 40,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export function forHorizontalModal({
  current,
  next,
  inverted,
  layouts: { screen }
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  const translateFocused = Animated.multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
      extrapolate: 'clamp'
    }),
    inverted
  )

  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.07],
    extrapolate: 'clamp'
  })

  const shadowOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: 'clamp'
  })

  return {
    cardStyle: {
      transform: [
        // Translation for the animation of the current card
        { translateX: translateFocused },
        // Translation for the animation of the card in back
        { translateX: 0 }
      ]
    },
    overlayStyle: { opacity: overlayOpacity },
    shadowStyle: { shadowOpacity }
  }
}
