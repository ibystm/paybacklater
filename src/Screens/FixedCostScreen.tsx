import { Feather } from '@expo/vector-icons'
import React, { FC, useCallback, useLayoutEffect, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../color'
import { FixedCostSettings } from '../types/FixedCostSettingTypes'
import { AddPaymentScreenNavigationProps, FixedCostScreenRouteProps } from './stacks/RootStacks'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/stack'

type P = {
  route: FixedCostScreenRouteProps
}

type FixedCostSettingDataType = {
  id: string
  name: string
  type: FixedCostSettings
}

const settingData: FixedCostSettingDataType[] = [
  {
    id: '1',
    name: '月初',
    type: 'beginningOfMonth'
  },
  {
    id: '2',
    name: '1５日',
    type: 'middleOfMonth'
  },
  {
    id: '3',
    name: '月末',
    type: 'endOfMonth'
  },
  {
    id: '4',
    name: '固定費にしない',
    type: 'none'
  }
]

const FixedCostScreen: FC<P> = ({ route }) => {
  // setStateをnavigateのparamsで渡すとwarningが出る
  // @see https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
  const { selectedSettings, setState } = route.params
  // この画面で管理する用のstate、paramで渡ってきているものとなんら変わりはない
  const [fixedCostSetting, setFixedCostSetting] = useState<FixedCostSettings>('none')

  useEffect(() => {
    setFixedCostSetting(selectedSettings)
  }, [selectedSettings])

  const renderItem = useCallback(
    ({ item }: { item: FixedCostSettingDataType }) => {
      const borderStyle: ViewStyle = item.id === '4' ? { borderBottomWidth: 0 } : { borderBottomWidth: 0.3 }
      return (
        <TouchableOpacity
          style={{ ...styles.listButton, ...borderStyle }}
          onPress={() => {
            // TODO stateが二重管理になっている。直す
            setState((c) => ({
              ...c,
              fixedCostSetting: item.type
            }))
            setFixedCostSetting(item.type)
          }}
        >
          <Text style={styles.listBtnText}>{item.name}</Text>
          {item.type === fixedCostSetting && <Feather name="check" size={24} color={Colors.Main} style={styles.icon} />}
        </TouchableOpacity>
      )
    },
    [selectedSettings, fixedCostSetting]
  )

  // 17,300
  // 61,370
  return (
    <View style={styles.centeredView}>
      <FlatList data={settingData} renderItem={renderItem} extraData={selectedSettings} />
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingLeft: 24
  },
  upperArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  fixedCostTitle: {
    alignItems: 'center',
    color: Colors.Main,
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
    marginRight: 24
  },
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderBottomColor: Colors.Gray8,
    borderBottomWidth: 0.3
  },
  listBtnText: {
    color: Colors.Gray8,
    fontSize: 16
  },
  icon: {
    marginRight: 32
  }
})

export default FixedCostScreen
