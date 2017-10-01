import React, { Component } from 'react';
import { Image, View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import DetailData from './DetailData.js';

const DATA = [
    { id: 1, text: 'kappa keepo1', uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' },
    { id: 2, text: 'kappa keepo2', uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' },
    { id: 3, text: 'kappa keepo3', uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' },
    { id: 4, text: 'kappa keepo4', uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' },
    { id: 5, text: 'kappa keepo5', uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' },
    { id: 6, text: 'kappa keepo6', uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' },
    { id: 7, text: 'kappa keepo7', uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' },
    { id: 8, text: 'kappa keepo8', uri: 'http://cityvibes.gr/media/Club/DemoClub/profile/asd.jpg' }

];
export default class CardImageExample extends Component {
    renderCard(item) {
        return (
            <Container
                key={item.id}
                style={{
                    borderRadius: 4,
                    borderWidth: 0.5,
                    borderColor: 'red',
                    height: 300,}}>
                <Content>
                    <Card>
                        <CardItem>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>{item.text}</Text>
                                    <TouchableOpacity onPress={() => { Alert.alert('kappa reality')} }>
                                        <View>
                                            <Image source={require('./more.png')} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text>{item.text}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: item.uri }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
            );
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <DetailData
                        data={DATA}
                        renderCard={this.renderCard}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        marginTop: 20,
    },
});