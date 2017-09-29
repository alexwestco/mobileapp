import React, {Component} from 'react';
import { StackNavigator, } from 'react-navigation';

import Home from '../screens/Home';
import Places from '../screens/Places';
import Profile from '../screens/Profile';

export const Screens = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      title: 'Home',
    }
  },
  Places: {
    screen: Places,
    navigationOptions:{
      title: 'Places',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
      title: 'Profile',
    }
  },
}, {
    headerMode: 'none'
});
