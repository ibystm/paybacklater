import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Home'
import AddPaymentScreen from '../AddPaymentScreen'

const AddPaymentStacks = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="AddPayment">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AddPayment"
        component={AddPaymentScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default AddPaymentStacks
