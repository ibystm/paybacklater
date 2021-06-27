import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../color'

type P = {
  image: JSX.Element
  index: number
  title?: string
  subTitle?: string
  width: number
  height: number
}

const Page: React.VFC<P> = (props) => {
  const { image, index, title, subTitle, width, height } = props
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
    <View style={[styles.container, { width }]}>
      <View
        style={{
          alignItems: 'center',
          paddingLeft: index === 0 || index === 3 ? '10%' : undefined
        }}
      >
        {image}
      </View>
      {titleElement()}
      {subTitleElement()}
    </View>
  )
}

export default React.memo(Page)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    marginTop: 18,
    textAlign: 'center',
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
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: Colors.Gray8
  }
})
