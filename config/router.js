import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import Home from '../screens/Home';
import Places from '../screens/Places';
import Profile from '../screens/Profile';
import DetailView from '../screens/DetailView';
import ShopsList from '../screens/ShopList';
import {DropDownAndroid} from '../android/components/DropDownAndroid';

export const Screens = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Places: {
    screen: Places,
    navigationOptions: {
      title: 'Places'
    }
  },
  ShopsList: {
    screen: ShopsList,
    navigationOptions: {
      title: 'ShopsList'
    }
  },
  DetailView: {
    screen: DetailView,
    navigationOptions: {
      title: 'DetailView'
    }
  },
  DropDownAndroid: {
    screen: DropDownAndroid,
    navigationOptions: {
      title: 'DropDownAndroid'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
    }
  },
}, {headerMode: 'none'});