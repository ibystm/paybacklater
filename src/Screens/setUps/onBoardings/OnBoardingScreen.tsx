import React, { useCallback, useMemo, useState } from 'react'
import { Animated, Dimensions, FlatList, Image, View } from 'react-native'
import Page from '../../../components/Page'

type Page = {
  title?: string
  subTitle?: string
  image: JSX.Element
}

const OnBoardingScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const keyExtractor = (_: any, index: number) => index.toString()
  const pages: Page[] = useMemo(
    () => [
      {
        image: <Image source={require('../../../../assets/images/onboardingImage_1.png')} />,
        title: 'PayBackLater'
      },
      {
        image: <Image source={require('../../../../assets/images/onboardingImage_2.png')} />,
        subTitle: 'お互いが払う金額の\n比率を固定し自動計算'
      },
      {
        image: <Image source={require('../../../../assets/images/onboardingImage_3.png')} />,
        subTitle: 'QRコードで手軽に\nユーザー連結可'
      },
      {
        image: <Image source={require('../../../../assets/images/onboardingImage_4.png')} />,
        subTitle: 'お互いが払うべき金額を\n瞬時に確認'
      }
    ],
    []
  )
  const renderItem = useCallback(({ item }) => {
    const { image, title, subTitle } = item
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    return <Page image={image} title={title} subTitle={subTitle} width={width} height={height} />
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Animated.View style={{ flex: 1, justifyContent: 'center' }}>
        <FlatList
          data={pages}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={1}
        />
      </Animated.View>
    </View>
  )
}

export default OnBoardingScreen
