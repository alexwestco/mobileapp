import React, {Component} from 'react';
import { StackNavigator, } from 'react-navigation';

import Home from '../screens/Home';
import Places from '../screens/Places';
import Profile from '../screens/Profile';
import ShopsList from '../screens/ShopsList';
import PlaceDetails from '../screens/PlaceDetails';
import DetailView from '../screens/DetailView';
import PlaceOwnerUpload from '../screens/PlaceOwnerUpload';

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
  ShopsList: {
    screen: ShopsList,
    navigationOptions:{
      title: 'ShopsList',
    }
  },
  DetailView: {
    screen: DetailView,
    navigationOptions: {
      title: 'DetailView'
    }
  },
  PlaceDetails: {
    screen: PlaceDetails,
    navigationOptions:{
      title: 'PlaceDetails',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
      title: 'Profile',
    }
  },
  PlaceOwnerUpload: {
    screen: PlaceOwnerUpload,
    navigationOptions:{
      title: 'PlaceOwnerUpload',
    }
  },
}, {
    headerMode: 'none'
});
