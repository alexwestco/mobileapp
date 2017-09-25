import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class SignInWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {showSignInText: false};
  }

  render() {
    let display;
    if(this.state.showSignInText){
      diplay = this.props.text;
    }else{
      display = ' ';
    }
    return (
      <Text>{display}</Text>
    );
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <SignInWindow text="asd"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
