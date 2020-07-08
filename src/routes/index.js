import React from 'react';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import BottomNavigator from './BottomNavigator';
import Search from '../screens/Search';
import SignIn from '../screens/SignIn';
import Splash from '../screens/Splash';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import VideoPlayer from '../screens/VideoPlayer';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="videoplayer"
        component={VideoPlayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signin"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
