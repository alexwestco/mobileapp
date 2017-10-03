import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Text } from 'native-base';


const { width, height } = Dimensions.get('window');
const equalWidth = (width / 2)

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopsList: []
        }
    }
    _keyExtractor = (item, index) => item.id;

    renderRowItem = (itemData) => {
        return (
            <Container style={{ height: 240, marginHorizontal: 8, marginVertical: 8 }}>
            {this.state.shopsList.length % 2 == 0 ? console.log('eimai miden'):console.log('eimia 1')}
                <Content showsVerticalScrollIndicator={false}>
                    <Card>
                        <CardItem cardBody>
                            <Image 
                                style={{ flex: 1, alignSelf: 'center', width: equalWidth, height: 150,}} 
                                source={{ uri: itemData.item.profile_picture_link }} />
                        </CardItem>
                        <CardItem style={{ height:80, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Text>{itemData.item.name}</Text>
                            <Text style={{fontSize: 10}}>{itemData.item.string_last_update}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    componentWillMount() {
        { this.getShopsFromApiAsync() }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.shopsList}
                    numColumns={2}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderRowItem}
                />
            </View>
        );
    }

    getShopsFromApiAsync = () => {
        return fetch('http://www.cityvibes.gr/android/places/')
            .then((response) => response.json())
            .then((responseJson) => {
               // alert(JSON.stringify(responseJson)) // fetch data complete!
                this.setState({ shopsList: responseJson }) // this will update state to re-render ui
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    }
});
