import React, { FC } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import AppContainer from './src/AppContainer'
import { store } from './src/redux/redux'

// TODO app.tsxもsrc/ 配下に入れたいけどbuildが通らなくなるので一旦このままにする
const App: FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
