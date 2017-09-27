import React, {Component} from 'react';
import { StackNavigator, } from 'react-navigation';

import Home from '../screens/Home';
import Places from '../screens/Places';

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
}, {
    headerMode: 'none'
});
