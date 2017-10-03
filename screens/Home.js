import React, {Component} from 'react';
import { StyleSheet, Platform, Text, View, TouchableHighlight, Alert, Image, TextInput, Button, Keyboard, AsyncStorage } from 'react-native';
import { Video } from "expo";
import Spinner from 'react-native-loading-spinner-overlay';

class ErrorText extends React.Component {
  render(){
    if(this.props.shouldShow){
      return <Text style={{color:'red', backgroundColor: 'transparent',}}>Wrong credentials, please try again</Text>
    }else{
      return <Text style={{backgroundColor: 'transparent',}}></Text>
    }
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {basicState: true, username: ' ', password: ' ', shouldShow: false};
  }

  storeToken(token){
    AsyncStorage.setItem("DJANGO_AUTHENTICATION_TOKEN", token, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }

  async onLoginPressed() {
    try {
      let response = await fetch('http://www.cityvibes.gr/android/token', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                username: this.state.username,
                                password: this.state.password,
                              })
                            });
      let res = await response.json();
      if (response.status == 200) {
          let accessToken = res.token;
          Keyboard.dismiss();
          this.setState({shouldShow: false, basicState: true});
          this.storeToken(accessToken);
          this.props.navigation.navigate('Profile');

      } else {
          this.setState({shouldShow: true});
          let error = res;
          throw error;
      }
    } catch(error) {
        console.log("error " + error);
    }
  }

  async getItem() {
  try {
    const value = await AsyncStorage.getItem("DJANGO_AUTHENTICATION_TOKEN");
    console.log('hey: '+value);
    return value;
  } catch (error) {
    // Handle errors here
  }
}

  _handleVideoRef = component => {
    const playbackObject = component;
  }

  onChange(){
    //this.playbackObject.setRateAsync(0, true);
    this.setState({basicState: !this.state.basicState});
    this.setState({shouldShow: false});
    this.state.username=' ';
    this.state.password=' ';
  }

  onLearnMore(){
    this.props.navigation.navigate('Places');
  }

  render() {
    if(this.state.basicState){
      //if(this.getItem() is null then, else.....

      return (
        <View style={styles.container}>

          {/* The background Video */}
          <Video
           ref={this._handleVideoRef}
           source={require('../images/cityvibes.mp4')}
           rate={1.0}
           volume={1.0}
           muted={false}
           resizeMode="stretch"
           shouldPlay
           isLooping
           style={[StyleSheet.absoluteFill, styles.paddingStyle]}/>


          {/* The Sign In text */}
          <View style={[styles.boxContainer, styles.signInContainer]}>

            <Text style={styles.signInText} onPress={this.onChange.bind(this)}>Sign In</Text>

          </View>

          <View style={[styles.boxContainer, styles.centerWindowContainer]}>

            {/* The CityVibes logo */}
            <Image
              style={{height: 70, width:300, marginLeft: 30}}
              source={{uri: 'http://www.cityvibes.gr/static/main_app/images/logo.png'}}
            />

            {/*  The text */}
            <Text
              style={{color: 'white', paddingTop: 10, paddingLeft: 10, paddingRight: 10, fontSize: 14, textAlign: 'center', backgroundColor: 'transparent',}}>
              Feel the vibes of your city! Photo uploads all day long! For more details visit www.cityvibes.gr
            </Text>

            {/* The Feel the Vibes button */}
            <View>
              <TouchableHighlight
                onPress={this.onLearnMore.bind(this)}>
                <View>
                  <Text style={{borderWidth: 2, borderColor: 'white',backgroundColor: 'transparent', padding:22, marginTop: 80, overflow:'hidden', fontSize: 32, color: 'white'}}>
                    Feel the vibes
                  </Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>
        </View>

      );
    }else{
      return (
        <View style={styles.container}>

          {/* The background Video */}
          <Video
           ref={this._handleVideoRef}
           source={require('../images/cityvibes.mp4')}
           rate={1.0}
           volume={1.0}
           muted={false}
           resizeMode="stretch"
           shouldPlay
           isLooping
           style={[StyleSheet.absoluteFill, styles.paddingStyle]}/>

          <View style={[styles.boxContainer, styles.myStyle]}>

            <ErrorText shouldShow={this.state.shouldShow} />

            {/* The username input space */}
            <TextInput
              autoCorrect={false}
              placeholder="Username"
              placeholderTextColor="white"
              underlineColorAndroid= 'white'
              onChangeText={(text) => this.setState({username: text})}
              style={styles.inputTextStyle}
            />

            {/* The password input space */}
            <TextInput
              autoCorrect={false}
              placeholder="Password"
              placeholderTextColor="white"
              underlineColorAndroid= 'white'
              secureTextEntry
              onChangeText={(text) => this.setState({password: text})}
              style={styles.inputTextStyle}            />

            {/* The Sign In text */}
            <Text style={{color: 'white', fontSize:20, padding:17, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'transparent',}} onPress={this.onLoginPressed.bind(this)}>Sign In</Text>

            {/* The Cancel text */}
            <Text style={{color: 'gray', padding:10, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'transparent',}} onPress={this.onChange.bind(this)}>Cancel</Text>

            {/* <Spinner visible={this.state.shouldShow} textStyle={{color: '#FFF'}}/> */}

          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  paddingStyle: {
    marginTop: (Platform.OS === 'ios') ? 0 : 24,
  },
  myStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 100,
  },
  boxContainer: {
    flex: 1,
  },
  signInText: {
    color: 'white',
    fontSize: 18 ,
    alignSelf: 'flex-end',
    paddingTop: 33,
    paddingRight: 18,
    backgroundColor: 'transparent',
  },
  username: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'flex-end',
    padding: 12,
  },
  password: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'flex-end',
    padding: 12,
  },
  centerWindowContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
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
  inputTextStyle: {
    fontSize: 19,
    color: 'white',
    width: 200,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  }
});
