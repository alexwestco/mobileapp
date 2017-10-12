import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export class ProfileDropDownIOS extends React.Component {

  constructor(props){
    super(props);
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
            <Image source={require('../../images/toolbar.jpg')} style={styles.image}>
              <Image source={{ uri: this.props.picture_url }} style={{height: 60, width:280, marginTop: 40, marginBottom:20, paddingLeft:30,}} />
              <Text style={{color:'white', fontSize:18}}> this.props.place_name </Text>
              <Text style={{color:'white',}}> Location: this.props.location </Text>
              <Text style={{color:'white',}}> this.props.price_one </Text>
              <Text style={{color:'white',}}> this.props.bottle_price </Text>
            </Image>
          </View>
        )}>

      </HeaderImageScrollView>

    );
  }
}

const styles = StyleSheet.create({
    fill: {
      flex: 1,
      alignItems: "stretch",
      backgroundColor: 'black',

    },
    content: {
      flex: 1,

    },
    image: {
      flex: 1,
      width: null,
      height: null,
      marginTop: 24,
      alignItems: 'center',
      justifyContent: 'center',
    }

});
