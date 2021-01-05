import React, { FC } from "react";
import { Provider } from "react-redux";
import Home from "./src/Home";
import { store } from "./src/redux/redux";

// TODO app.tsxもsrc/ 配下に入れたいけどbuildが通らなくなるので一旦このままにする
const App: FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
