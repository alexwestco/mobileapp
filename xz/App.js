import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
const { width, height } = Dimensions.get('window');

const equalWidth = (width / 2)

export default class App extends Component {


    constructor(props) {
        super(props)
        this.state = {
            moviesList: []
        }
    }

    _keyExtractor = (item, index) => item.id;

    renderRowItem = (itemData) => {
        return (
            <Container style={{
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: 'red',
                height: 250,
                margin: 10
            }}>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image style={{height: 150, width: equalWidth}} source={{ uri: itemData.item.profile_picture_link }} resizeMode='cover' />
                        </CardItem>
                        <CardItem style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Text>{itemData.item.name}</Text>
                            <Text style={{fontSize: 10}}>{itemData.item.string_last_update}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }

    componentWillMount() {
        { this.getMoviesFromApiAsync() }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.moviesList}
                    numColumns={2}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderRowItem}
                />
            </View>
        );
    }


    getMoviesFromApiAsync = () => {
        return fetch('http://www.cityvibes.gr/android/places/')
            .then((response) => response.json())
            .then((responseJson) => {
               // alert(JSON.stringify(responseJson))
                this.setState({ moviesList: responseJson }) // this will update state to re-render ui
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
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        marginTop: 20
    }
});
