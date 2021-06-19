import React, { useCallback, useMemo, useState } from 'react'
import { Dimensions, FlatList, Image, View } from 'react-native'
import Dots from '../../../components/Dots'
import Page from '../../../components/Page'

type Page = {
  title?: string
  subTitle?: string
  image: JSX.Element
}

const OnBoardingScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [pageData, setPageData] = useState({
    previousPage: 0,
    currentPage: 0
  })
  // needs to set outside of render()
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 95 })
  // console.log('@@@@@pageData', pageData)
  const keyExtractor = (_: any, index: number) => index.toString()
  const pages: Page[] = useMemo(
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
  const renderItem = useCallback(({ item, index }) => {
    const { image, title, subTitle } = item
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    return <Page index={index} image={image} title={title} subTitle={subTitle} width={width} height={height} />
  }, [])
  const onSwipePageChange = React.useRef(({ viewableItems }: { viewableItems: any }) => {
    if (viewableItems[0] === undefined) {
      console.log('failed to swipe')
      return
    }
    setPageData((pre) => ({
      previousPage: pre.currentPage,
      currentPage: viewableItems[0].index
    }))
  })

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
    </View>
  )
}

export default OnBoardingScreen
