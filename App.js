import React from 'react';
import Navigator from "./navigator/navigator";
import { useScreens } from "react-native-screens";
import store from './store/store'
import { Provider } from "react-redux";

useScreens();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
