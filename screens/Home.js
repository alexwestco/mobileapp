import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image, TextInput, Button } from 'react-native';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {basicState: true};
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    this.setState({basicState: !this.state.basicState});
  }

  signIn(){
    return fetch('http://www.cityvibes.gr/android/places/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Hey bro "+responseJson)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onLearnMore(){
    this.props.navigation.navigate('Places',{});
  }

  render() {
    if(this.state.basicState){
      return (
        <View style={styles.container}>

          <View style={[styles.boxContainer, styles.signInContainer]}>

            {/* The Sign In text */}
            <Text style={styles.signInText} onPress={this.onChange}>Sign In</Text>

          </View>

          <View style={[styles.boxContainer, styles.centerWindowContainer]}>

            {/* The CityVibes logo */}
            <Image
              style={{height: 70, width:300, marginLeft: 30}}
              source={{uri: 'http://www.cityvibes.gr/static/main_app/images/logo.png'}}
            />

            {/*  The text */}
            <Text
              style={{color: 'white', paddingTop: 10, paddingLeft: 10, paddingRight: 10, fontSize: 14, textAlign: 'center'}}>
              Feel the vibes of your city! Photo uploads all day long! For more details visit www.cityvibes.gr
            </Text>

            {/* The Feel the Vibes button */}
            <View>
              <TouchableHighlight
                onPress={this.onLearnMore}>
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
          <View style={{alignItems: 'center', justifyContent: 'center'}}>

            {/* The username input space */}
            <TextInput
              placeholder="username"
              onChangeText={(text) => this.setState({text})}
              style={{borderColor: 'gray', color: 'white'}}
            />

            {/* The password input space */}
            <TextInput
              placeholder="password"
              onChangeText={(text) => this.setState({text})}
              style={{borderColor: 'gray', color: 'white'}}
            />

            {/* The Sign In text */}
            <Text style={{color: 'white', fontSize:20, padding:15}} onPress={this.signIn}>Sign In</Text>

            {/* The Cancel text */}
            <Text style={{color: 'white', padding:15}} onPress={this.onChange}>Cancel</Text>
          </View>
        </View>

      );
    }


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
});
