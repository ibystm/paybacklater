import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AppContainer from '../../AppContainer'
import AddPaymentScreen from '../AddPaymentScreen'

const RootStacks = () => {
  const Stack = createStackNavigator()
  // TODO userの存在チェックをかける
  const user = true
  return (
    <Stack.Navigator mode="modal" screenOptions={{ animationEnabled: false }} headerMode="none">
      {user ? <Stack.Screen name="AppContainer" component={AppContainer} /> : <></>}
      <Stack.Screen name="AddPaymentScreen" component={AddPaymentScreen} options={{ animationEnabled: true }} />
    </Stack.Navigator>
  )
}

export default RootStacks
