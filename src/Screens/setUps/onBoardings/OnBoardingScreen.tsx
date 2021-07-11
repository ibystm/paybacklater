import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View, ViewToken } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../../../color'
import Dots from '../../../components/Dots'
import StartButton from '../../../components/icons/StartButton'
import Page from '../../../components/Page'

type PageType = {
  title?: string
  subTitle?: string
  image: JSX.Element
}

const OnBoardingScreen: React.FC = () => {
  const navigation = useNavigation()
  const [pageData, setPageData] = useState({
    previousPage: 0,
    currentPage: 0
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fadeAnimation, setFadeAnimation] = useState<Animated.Value>(new Animated.Value(0))
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 95 })
  const keyExtractor = (_item: PageType, index: number) => index.toString()
  const pages: PageType[] = useMemo(
    () => [
      // TODO: 本当はdeviceごとのごとの幅をちゃんと考慮したいから、styleの数字直指定は避けたい。
      {
        image: (
          <Image
            source={require('../../../../assets/images/onboardingImage_1.png')}
            style={{ height: 320, marginTop: 24, width: 330 }}
          />
        ),
        title: 'PayBackLater'
      },
      {
        image: (
          <Image
            source={require('../../../../assets/images/onboardingImage_2.png')}
            style={{ height: 320, width: 330 }}
          />
        ),
        subTitle: 'お互いが払う金額の\n比率を固定し自動計算'
      },
      {
        image: (
          <Image
            source={require('../../../../assets/images/onboardingImage_3.png')}
            style={{ height: 320, marginTop: 24 }}
          />
        ),
        subTitle: 'QRコードで手軽に\nユーザー連結可'
      },
      {
        image: (
          <Image
            source={require('../../../../assets/images/onboardingImage_4.png')}
            style={{ height: 300, width: 340, marginTop: 24 }}
          />
        ),
        subTitle: 'お互いが払うべき金額を\n瞬時に確認'
      }
    ],
    []
  )
  const renderItem = useCallback(({ item, index }: { item: PageType; index: number }) => {
    const { image, title, subTitle } = item
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    return <Page index={index} image={image} title={title} subTitle={subTitle} width={width} height={height} />
  }, [])
  const onSwipePageChange = React.useRef(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
    if (viewableItems[0] === undefined) {
      return
    }
    setPageData((pre) => ({
      previousPage: pre.currentPage,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      currentPage: viewableItems[0].index!
    }))
  })
  const goToNext = (): void => {
    navigation.navigate('LoginInputScreen')
  }

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300, // 0.3sという数字に明確な根拠はなし
        useNativeDriver: true
      }).start()
    }
    const fadeOut = () => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
    if (pageData.currentPage === 0) {
      fadeIn()
    } else {
      fadeOut()
    }
  }, [fadeAnimation, pageData.currentPage])

  return (
    <View style={{ justifyContent: 'center' }}>
      <View style={{ marginBottom: 30, marginTop: 100 }}>
        <Dots numPages={pages.length} currentPage={pageData.currentPage} />
      </View>
      <FlatList
        data={pages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={1}
        onViewableItemsChanged={onSwipePageChange.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.buttonArea}>
        <Animated.View
          style={{
            opacity: fadeAnimation
          }}
        >
          <TouchableOpacity>
            <StartButton />
          </TouchableOpacity>
        </Animated.View>
        <View style={{ height: 8 }} />
        <TouchableOpacity style={[styles.buttonBase, styles.loginButton]} onPress={goToNext}>
          <Text style={[styles.startButtonTextBase, styles.loginButtonText]}>ログインする</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  buttonArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBase: {
    height: 48,
    width: 288,
    justifyContent: 'center',
    borderRadius: 40
  },
  loginButton: {
    borderWidth: 1,
    borderColor: Colors.Main
  },
  startButtonTextBase: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24
  },
  startButtonText: {
    color: Colors.Gray1
  },
  loginButtonText: {
    color: Colors.Main
  }
})
