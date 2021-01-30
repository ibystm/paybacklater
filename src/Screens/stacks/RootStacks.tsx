import { createStackNavigator, StackCardInterpolatedStyle, StackCardInterpolationProps } from '@react-navigation/stack'
import React from 'react'
import { Animated } from 'react-native'
import AddPaymentScreen from '../AddPaymentScreen'
import FixedCostScreen from '../FixedCostScreen'
import AppContainer from './AppContainer'

const RootStacks = () => {
  const Stack = createStackNavigator()
  // TODO userの存在チェックをかける
  const user = true
  return (
    <Stack.Navigator mode="modal" screenOptions={{ animationEnabled: false }} headerMode="none">
      {user ? <Stack.Screen name="AppContainer" component={AppContainer} /> : <></>}
      <Stack.Screen
        name="AddPaymentScreen"
        component={AddPaymentScreen}
        options={{
          animationEnabled: true
          // cardStyleInterpolator: forHorizontalModal
        }}
      />
      <Stack.Screen
        name="FixedCostScreen"
        component={FixedCostScreen}
        options={{
          animationEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: forHorizontalModal
        }}
      />
    </Stack.Navigator>
  )
}

export default RootStacks

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
