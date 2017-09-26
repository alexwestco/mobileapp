import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import Video from 'react-native-video';


class SignInText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showSignInText: true};
  }

  render() {
    if(this.state.showSignInText){
      return(
        <View>
          <Text style={styles.signInText}>Sign In</Text>
        </View>
      );
    }else{
      return(
        <View>
          <Text> </Text>
        </View>
      );
    }
  }
}

class SignInWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showSignInWindow: false};
  }

  render() {
    if(this.state.showSignInWindow == false){
      return(
        <View>
          <View>
            <Text
              style={{color: 'white', paddingLeft: 10, paddingRight: 10, paddingBottom: 75, fontSize: 14, textAlign: 'center'}}>
              Feel the vibes of your city! Photo uploads all day long! For more details visit www.cityvibes.gr
            </Text>
            <Button
              containerStyle={{padding:10, height:60, overflow:'hidden', borderRadius:4, backgroundColor: 'transparent'}}
              style={{fontSize: 30, color: 'white'}}>
              Feel the Vibes
            </Button>
          </View>

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
    let pic = {
     uri: 'http://cityvibes.gr/media/background.gif'
    };
    return (
      <View style={styles.backgroundVideo}>
        <Image source={pic}/>
        <View style={[styles.boxContainer, styles.signInContainer]}>
          <SignInText/>
        </View>

        <View style={[styles.boxContainer, styles.centerWindowContainer]}>
          <SignInWindow/>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'black',
  },
  boxContainer: {
    flex: 1,
  },
  signInText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'flex-end',
    padding: 12,
  },
  centerWindowContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
