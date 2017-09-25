import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class SignInWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showSignInText: true};
  }

  render() {
    if(this.state.showSignInText == true){
      display = this.props.text;
      return(
        <View style={{width: 100, height: 100, backgroundColor: 'transparent'}}>
          <Text>Feel the vibes of your city! Photo uploads all day long! For more details visit www.cityvibes.gr</Text>
          <Button
            //onPress={onPressLearnMore}
            color: 'black'
            title="Feel the Vibes"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      );
    }else{
      return(
        <View>
          <Text>Its True bitch</Text>
          <Text>Shut Up!</Text>
        </View>
      );
    }
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInWindow text='asd'/>
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
  text: {
    alignItems: 'center',
    //width: '400dp'

  }
});
