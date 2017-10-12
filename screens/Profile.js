import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput, Button, Platform, } from 'react-native';
import { Video } from "expo";
import { ProfileDropDownAndroid } from '../android/components/ProfileDropDownAndroid';
import { ProfileDropDownIOS } from '../ios/components/ProfileDropDownIOS';

export default class Places extends React.Component {

  constructor(props) {
    super(props);
    this.state = {loaded:false, };
    let place_name = '';
    let picture_url = '';
    let location = '';
    let price_one = '';
    let price_two = '';
    let facebook_url = '';
    let instagram_url = '';
    let type = '';
    let total_views = 0;
    let views_today = 0;
    this.get_my_place();
  }

  goToFacebookProfile(){
    this.props.navigation.navigate('PlaceOwnerUpload');
  }

  async get_my_place(){
    console.log('starting'+this.props.navigation.state.params);
    try {
      let response = await fetch('http://www.cityvibes.gr/android/get_my_place', {
                              method: 'GET',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': 'Token '+this.props.navigation.state.params,
                              },

                            });
      let res = await response.json();
      if (response.status == 200) {
        this.place_name = res.name;
        this.picture_url = res.profile_picture_link;
        this.location = res.location + ', ' + res.city;
        this.facebook_url = res.facebook_account_link;
        this.type = res.type;
        this.total_views = res.total_views;
        this.views_today = res.views_today;
        if(this.type == 'Club'){
          this.price_one = 'Drink Price: ' + res.drink_price + ' €';
          this.price_two = 'Bottle Price: ' + res.bottle_price + ' €';
        }else if(this.type == 'CafeBar'){
          this.price_one = 'Coffee Price: ' + res.coffee_price + ' €';
          this.price_two = 'Drink Price: ' + res.drink_price + ' €';
        }else if(this.type == 'Tsipouradiko'){
          this.price_one = 'Wine Price(1 litre): ' + res.wine_price + ' €';
          this.price_two = 'Retsina Price: ' + res.retsina_price + ' €';
        }
        this.setState({loaded: true,});
      } else {
          console.log(res);
          let error = res;
          throw error;
      }
    } catch(error) {
        console.log("error " + error);
    }
  }

  render() {

    if(this.state.loaded==true){
      console.log("Loaded: "+this.picture_url+ ' '+this.place_name)
      return(

        <View style={styles.fill}>
          <DropDownComponent
            picture_url = {this.picture_url}
            place_name = {this.place_name}
            picture_url = {this.picture_url}
            location = {this.location}
            facebook_url = {this.facebook_url}
            type = {this.type}
            total_views = {this.total_views}
            views_today = {this.views_today}
            price_one = {this.price_one}
            price_two = {this.price_two}
          />
          <View style={{alignItems: 'center', flex: 1,}}>

            <TouchableOpacity
              style={{ height: 50, width: 200, marginTop: 10, marginBottom: 25, backgroundColor: "#5183CD",}}
              onPress={this.goToFacebookProfile.bind(this)}>
                <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', }}>Upload Files</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ height: 50, width: 200, marginTop: 10, marginBottom: 25, backgroundColor: "#5183CD",}}
              onPress={this.goToFacebookProfile.bind(this)}>
                <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', }}>Edit Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ height: 50, width: 200, marginTop: 10, marginBottom: 25, backgroundColor: "#FFA500",}}
              onPress={this.goToFacebookProfile.bind(this)}>
                <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', }}>Log Out</Text>
            </TouchableOpacity>

          </View>
        </View>
      );
    }else{
      console.log("NOT Loaded: "+this.picture_url+ ' '+this.place_name)
      return(
        <View style={styles.fill}>

        </View>
      );

    }

  }
}

const styles = StyleSheet.create({
    fill: {
      flex: 1,
      alignItems: "stretch",
      backgroundColor: 'black',

    },
});

const DropDownComponent = Platform.select({
  ios: () => ProfileDropDownIOS,
  android: () => ProfileDropDownAndroid,
})();
