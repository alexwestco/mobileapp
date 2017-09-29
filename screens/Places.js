import Expo from 'expo';
import React, { Component } from 'react';
import { Animated, Platform, StatusBar, StyleSheet, Text, View, Image, } from 'react-native';
import { DropDownAndroid } from '../android/components/DropDownAndroid';
import { DropDownIOS } from '../ios/components/DropDownIOS';

export default class Places extends Component {
    constructor(props) {
        super(props);

    }
    

    render() {

        return (
          <View style={styles.fill}>
            <Component />;
          </View>
        );
    }
}

const styles = StyleSheet.create({
    fill: {
      flex: 1,
      alignItems: "stretch",
      backgroundColor: 'black',

    },
});
