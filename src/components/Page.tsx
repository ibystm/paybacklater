import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../color'

type P = {
  image: JSX.Element
  title?: string
  subTitle?: string
  containerStyles?: any // 一旦
  width: number
  height: number
}

const Page: React.VFC<P> = (props) => {
  const { image, title, containerStyles, subTitle, width, height } = props
  console.log('titleElement', subTitle)
  const titleElement = () => {
    if (title) {
      return (
        <View style={styles.title}>
          <Text style={styles.TitleText}>{title}</Text>
        </View>
      )
    }
  }
  const subTitleElement = () => {
    if (subTitle) {
      return (
        <View style={styles.subTitle}>
          <Text style={styles.subTitleText} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      )
    }
  }

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={{ alignItems: 'center', width: 320 }}>{image}</View>
      {titleElement()}
      {subTitleElement()}
    </View>
  )
}

export default React.memo(Page)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
    // backgroundColor: 'red'
  },
  title: {
    marginTop: 18,
    textAlign: 'center',
    // width: ,
    height: 32
  },
  TitleText: {
    fontSize: 30,
    color: Colors.Main,
    fontWeight: '800',
    lineHeight: 32
  },
  subTitle: {
    marginTop: 20,
    height: 72,
    textAlign: 'center'
  },
  subTitleText: {
    fontWeight: '500',
    // fontFamily: ''
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: Colors.Gray8
  }
  // imageContainer: {
  //   top: 112,
  //   position: 'absolute'
  // }
})
