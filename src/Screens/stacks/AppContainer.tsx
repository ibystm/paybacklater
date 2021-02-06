// home.js
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import 'react-native-gesture-handler'
import { Colors } from '../../color'
import History from '../History'
import Home from '../Home'
import MyPage from '../MyPage'
import Notification from '../Notification'

type BottomTabParamList = {
  Home: { isSaveDone: boolean }
  History: undefined
  Notification: undefined
  MyPage: undefined
}

export type HomeTabProps = BottomTabScreenProps<BottomTabParamList, 'Home'>

const dummyComponent = () => null

const Tab = createBottomTabNavigator()

const AppContainer = (props: HomeTabProps) => {
  const isSaveDone = !!props.route.params && !!props.route.params.isSaveDone
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.Main,
        inactiveTintColor: Colors.Gray7
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => <Home saveDone={isSaveDone} />}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={28} color={color} />
        }}
      />
      <Tab.Screen
        name="履歴"
        component={History}
        options={{
          tabBarLabel: '履歴',
          tabBarIcon: ({ color }) => <Feather name="book-open" size={28} color={color} />
        }}
      />
      <Tab.Screen
        name="追加"
        component={dummyComponent}
        options={{
          tabBarLabel: '追加',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={28} color={color} />
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate('AddPaymentScreen')
          }
        })}
      />
      <Tab.Screen
        name="通知"
        component={Notification}
        options={{
          tabBarLabel: '通知',
          tabBarIcon: ({ color }) => <Feather name="bell" size={28} color={color} />
        }}
      />
      <Tab.Screen
        name="マイページ"
        component={MyPage}
        options={{
          tabBarLabel: 'マイページ',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={28} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}

export default AppContainer
