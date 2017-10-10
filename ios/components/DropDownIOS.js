import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import HeaderImageScrollView, {TriggeringView} from 'react-native-image-header-scroll-view';

export class DropDownIOS extends React.Component {

  render() {
    return (
      <HeaderImageScrollView
        maxHeight={250}
        minHeight={80}
        maxOverlayOpacity={1}
        fadeOutForeground={true}
        renderHeader={() => (
        <View style={styles.content}>
          <Image source={require('../../images/toolbar.jpg')} style={styles.image}>
            <Image
              source={{
              uri: 'http://www.cityvibes.gr/static/main_app/images/logo.png'
            }}
              style={{
              height: 60,
              width: 280,
              marginTop: 40,
              marginBottom: 20,
              paddingLeft: 30
            }}/>
            <Text
              style={{
              color: 'white',
              fontSize: 18,
              backgroundColor: 'transparent'
            }}>
              Places near you
            </Text>
          </Image>
        </View>
      )}>
        <Text
          style={{
          height: 30,
          backgroundColor: 'black',
          color: 'white',
          fontSize: 18
        }}>
          All
        </Text>
        <View style={{
          height: 1000
        }}>
          <TriggeringView onHide={() => console.log('text hidden')}>
            <ShopList kappa={this.props.reality}/>
          </TriggeringView>
        </View>
      </HeaderImageScrollView>

    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: 'black'
  },
  content: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
