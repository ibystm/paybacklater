import React from 'react'
import { StyleSheet, View } from 'react-native'
import Dot from './Dot'

type P = {
  numPages: number
  currentPage: number
}

const Dots: React.VFC<P> = (props) => {
  const { numPages, currentPage } = props
  return (
    <View style={styles.container}>
      {[...Array(numPages)].map((_, index) => {
        return <Dot key={index} isActive={index === currentPage} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 16
  }
})

export default Dots
