import { NavigationContainer } from '@react-navigation/native'
import React, { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from './src/redux/redux'
import RootStacks from './src/Screens/stacks/RootStacks'

// TODO app.tsxもsrc/ 配下に入れたいけどbuildが通らなくなるので一旦このままにする
const App: FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStacks />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
