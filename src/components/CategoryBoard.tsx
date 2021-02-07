import { FontAwesome, FontAwesome5, Foundation, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../color'
import { InputState } from '../Screens/AddPaymentScreen'

type P = {
  state: InputState
  setState: Dispatch<SetStateAction<InputState>>
}

const CategoryBoard: FC<P> = (props) => {
  const { state, setState } = props
  const onPressFood = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'food'
      })),
    []
  )
  const onPressLiving = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'living'
      })),
    []
  )
  const onPressHobbyAndCulture = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'hobbyAndCulture'
      })),
    []
  )
  const onPressRent = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'rent'
      })),
    []
  )
  const onPressLeisure = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'leisure'
      })),
    []
  )
  const onPressTransportation = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'transportation'
      })),
    []
  )
  const onPressFurnitureAndAppliances = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'furnitureAndAppliances'
      })),
    []
  )
  const onPresUtility = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'utility'
      })),
    []
  )
  const onPressCommunication = useCallback(
    () =>
      setState((c) => ({
        ...c,
        category: 'communication'
      })),
    []
  )
  return (
    <View style={styles.container}>
      <View style={styles.rowBox}>
        <TouchableOpacity style={styles.itemBox} onPress={onPressFood}>
          <MaterialCommunityIcons name="silverware-fork-knife" size={24} color={Colors.Main} style={styles.icon} />
          <Text style={styles.text}>食費</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBox} onPress={onPressLiving}>
          <FontAwesome5 name="toilet-paper" size={24} color={Colors.Main} style={styles.icon} />
          <Text style={styles.text}>生活用品</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBox} onPress={onPressTransportation}>
          <MaterialIcons name="directions-train" size={24} color={Colors.Main} style={styles.icon} />
          <Text style={styles.text}>交通費</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowBox}>
        <TouchableOpacity style={styles.itemBox} onPress={onPressFurnitureAndAppliances}>
          <MaterialIcons name="local-laundry-service" size={24} color={Colors.Main} style={styles.icon} />
          <Text style={styles.text}>家具家電</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBox} onPress={onPresUtility}>
          <FontAwesome5 name="faucet" size={24} color={Colors.Main} style={styles.icon} />
          <Text style={styles.text}>光熱費</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBox} onPress={onPressHobbyAndCulture}>
          <FontAwesome name="book" size={24} color={Colors.Main} style={styles.icon} />
          <View>
            <Text style={styles.text}>趣味教養</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowBox}>
        <TouchableOpacity style={styles.itemBox} onPress={onPressLeisure}>
          <MaterialCommunityIcons name="bag-carry-on" size={24} color={Colors.Main} style={styles.icon} />
          <Text style={styles.text}>レジャー</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBox} onPress={onPressRent}>
          <MaterialIcons name="house" size={24} color={Colors.Main} style={styles.icon} />
          <Text style={styles.text}>家賃</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBox} onPress={onPressCommunication}>
          <Foundation name="telephone" size={24} color={Colors.Main} style={styles.icon} />
          <Text style={styles.text}>通信費</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CategoryBoard

const styles = StyleSheet.create({
  container: { flexDirection: 'column', flex: 1, marginBottom: 80, justifyContent: 'center' },
  rowBox: { flexDirection: 'row', justifyContent: 'space-between' },
  itemBox: {
    width: 64,
    height: 64,
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9
  },
  icon: { paddingBottom: 6 },
  text: { color: Colors.Main, fontWeight: '500', fontSize: 14, lineHeight: 16, textAlign: 'center', marginTop: 6 }
})
