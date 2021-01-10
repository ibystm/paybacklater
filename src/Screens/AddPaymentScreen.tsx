import React, { useCallback, useState } from 'react'
import { View, Text, Modal, StyleSheet, SafeAreaView } from 'react-native'
import CloseButton from '../components/icons/CloseButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../utils/types/color'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  upperArea: {
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addText: { alignItems: 'center', marginLeft: 32, color: Colors.Main, fontSize: 16, fontWeight: 'bold' },
  closeButton: { height: 24, paddingRight: 32 }
})

const AddPaymentScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true)
  const navigation = useNavigation()
  const goHome = useCallback(() => {
    setIsModalVisible(false)
    navigation.navigate('Home')
  }, [])

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isModalVisible}
      onRequestClose={() => {
        console.warn('モーダル出たよ!')
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.upperArea}>
          <View />
          <Text style={styles.addText}>追加</Text>
          <TouchableOpacity style={styles.closeButton} onPress={goHome}>
            <CloseButton />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default AddPaymentScreen
