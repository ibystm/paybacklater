// home.js
import React, { Component, FC } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { setName, deleteName } from "./redux/redux";
import { store } from "./redux/redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./utils/types/color";

const Tab = createBottomTabNavigator();

export interface P {
  name: string;
  deleteName: () => void;
  setName: (str: string) => void;
}

const Context: FC<P> = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{ marginTop: 100 }}>{props.name}.</Text>
      <View style={{ flexDirection: "row" }}>
        <Button onPress={props.deleteName} title="deleteName" />
        <Button
          onPress={() => props.setName("MY NAME IS KOSUKE")}
          title="setName"
        />
      </View>
      {/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
      {/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
      <Text style={{ marginBottom: 100 }}>
        Current store: {JSON.stringify(store.getState())}
      </Text>
    </View>
  );
};

const Settings: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="person-outline" size={24} color={Colors.Main} />
      <Text>Settings!</Text>
    </View>
  );
};

const Home: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
};

const Container = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: Colors.Main,
          inactiveTintColor: Colors.Gray7,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="履歴"
          component={Settings}
          options={{
            tabBarLabel: "タイムライン",
            tabBarIcon: ({ color }) => (
              <Entypo name="list" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="追加"
          component={Settings}
          options={{
            tabBarLabel: "追加",
            tabBarIcon: ({ color }) => (
              <AntDesign name="pluscircleo" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="通知"
          component={Settings}
          options={{
            tabBarLabel: "通知",
            tabBarIcon: ({ color }) => (
              <Feather name="bell" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="マイページ"
          component={Settings}
          options={{
            tabBarLabel: "マイページ",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// FIX ME
const mapStateToProps = (state: any) => ({
  // storeは巨大なJsonの塊なので、nameにjsonから取って来たデータを代入している。
  name: state.user.name,
});

const mapDispatchToProps = {
  // importしたactionCreatorを記述。
  setName,
  deleteName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
