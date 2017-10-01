import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>                         
                                <Text>kappa reality</Text>
                                <Image source={require('./more.png')} />
                            </View>
                                <View>
                                    <Text>kappa reality</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}