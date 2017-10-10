import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image, TextInput, Button } from 'react-native';
import { Video } from "expo";

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>Hey mother bunner</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'black',
  },
});
