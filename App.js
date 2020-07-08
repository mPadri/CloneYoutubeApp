import React from 'react';
import {StyleSheet, YellowBox} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import Routes from './src/routes';

import {Provider, useSelector} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {themeReducer} from './src/reducer/reducerTheme';
import {userReducer} from './src/reducer/reducerUser';

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white',
    background: 'black',
    toggleIcon: 'white',
  },
};
const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIcon: 'red',
    background: '#eaeaea',
    toggleIcon: '#f5dd4b',
  },
};

const rootReducer = combineReducers({
  themeMode: themeReducer,
  setUser: userReducer,
});
const store = createStore(rootReducer);

export const RootNavigation = () => {
  let currentTheme = useSelector(state => {
    return state.themeMode;
  });

  return (
    <NavigationContainer
      theme={currentTheme ? customDarkTheme : customDefaultTheme}>
      <Routes />
    </NavigationContainer>
  );
};

const App = () => {
  YellowBox.ignoreWarnings(['Picker has been']);
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
