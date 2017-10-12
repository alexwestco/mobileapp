import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import {Container, Content, Card, CardItem, Text} from 'native-base';
import DetailViewLogic from '../android/components/DetailViewLogic';
import DetailApi from '../android/apis/DetailApi';

export default class DetailView extends React.Component {
    renderCard(item) {
        return (
            <Container
                key={item.id}
                style={{
                flex: 1,
                height: 350
            }}>
                <Content>
                    <Card>
                        <CardItem>
                            <View
                                style={{
                                flex: 1,
                                flexDirection: 'column'
                            }}>
                                <View
                                    style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text>{item.approximate_time}</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                        Alert.alert('kappa reality')
                                    }}>
                                        <View>
                                            <Image source={require('../images/more.png')}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text>{item.music_genre}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem cardBody>
                            <Image
                                source={{
                                uri: item.file_link
                            }}
                                style={{
                                height: 250,
                                width: null,
                                flex: 1,
                                resizeMode: 'stretch'
                            }}/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
    constructor(props) {
        super(props)
        this.state = {
            fotoData: []
        }
    }

    componentWillMount() {
        DetailApi
            .getData()
            .then((res) => {
                this.setState({fotoData: res})
            }, (reason) => console.log("KAPPA REALITY " + reason))
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <DetailViewLogic data={this.state.fotoData} renderCard={this.renderCard}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        marginTop: 20
    }
});
