import React from "react";
import { Provider } from "react-redux";
import configStore from "./redux/configStore";
import routes from "./routes";

const store = configStore();

const App = () => {
  return <Provider store={store}>{routes}</Provider>;
};

export default App;
