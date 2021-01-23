// home.js
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { Button, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { Colors } from '../../color'
import { deleteName, setName, store } from '../../redux/redux'
import History from '../History'
import Home from '../Home'
import MyPage from '../MyPage'
import Notification from '../Notification'

export interface P {
  name: string
  deleteName: () => void
  setName: (str: string) => void
}

const Context: FC<P> = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <Text style={{ marginTop: 100 }}>{props.name}.</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={props.deleteName} title="deleteName" />
        <Button onPress={() => props.setName('MY NAME IS KOSUKE')} title="setName" />
      </View>
      {/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
      {/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
      <Text style={{ marginBottom: 100 }}>Current store: {JSON.stringify(store.getState())}</Text>
    </View>
  )
}

const dummyComponent = () => null

const Tab = createBottomTabNavigator()

const AppContainer = () => {
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
        component={Home}
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

// FIX ME
const mapStateToProps = (state: any) => ({
  // storeは巨大なJsonの塊なので、nameにjsonから取って来たデータを代入している。
  name: state.user.name
})

const mapDispatchToProps = {
  // importしたactionCreatorを記述。
  setName,
  deleteName
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
