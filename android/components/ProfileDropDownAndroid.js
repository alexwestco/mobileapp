import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, Button, } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export class ProfileDropDownAndroid extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props);
  }

  goToFacebookProfile(){

  }

  render(){
    return(
      <HeaderImageScrollView
        maxHeight={280}
        minHeight={80}
        maxOverlayOpacity={1}
        fadeOutForeground={true}
        renderHeader={() => (
          <View style={styles.content}>
            <Image source={require('../../images/toolbar_detail_image.jpg')} style={styles.image}>
              <Image source={{ uri: this.props.picture_url }} style={styles.profile_image} />
              <View style={{marginTop:10, }}>
                <Text style={styles.place_name}> {this.props.place_name} </Text>
                <Text style={styles.text}> Location: {this.props.location} </Text>
                <Text style={styles.text}> {this.props.price_one} </Text>
                <Text style={styles.text}> {this.props.price_two} </Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={{width: 40, height: 40, margin: 5,}} onPress={this.goToFacebookProfile.bind(this)} source={require('../../images/fb.png')} />
                  <Image style={{width: 40, height: 40, margin: 5,}} source={require('../../images/insta.png')} />
                </View>
                <Text style={{color: 'white', fontSize: 18, paddingTop: 5,}}>Views today: {this.props.views_today}</Text>
                <Text style={{color: 'white', fontSize: 18,}}>Total views: {this.props.total_views}</Text>
              </View>


            </Image>
          </View>
        )}>

      </HeaderImageScrollView>

    );
  }
}

const styles = StyleSheet.create({

    content: {
      flex: 1,
    },
    image: {
      flex: 1,
      flexDirection: 'row',
      width: null,
      height: null,
      marginTop: 24,

    },
    profile_image: {
      width: 150,
      height: 150,
      marginLeft: 10,
      marginTop: 10,
      alignSelf: 'flex-start',
    },
    text: {
      color: 'white',
      fontSize: 15,
    },
    place_name: {
      fontSize: 27,
      paddingBottom: 5,
      color: 'white',

    },
});
