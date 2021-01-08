import React, { FC } from "react";
import { Provider } from "react-redux";
import AppContainer from "./src/AppContainer";
import { store } from "./src/redux/redux";

// TODO app.tsxもsrc/ 配下に入れたいけどbuildが通らなくなるので一旦このままにする
const App: FC = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
