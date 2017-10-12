import React, { Component } from 'react';
import { View} from 'react-native';


class DetailViewLogic extends Component {
    renderCards() {
        return this.props.data.map(item => {
            return this.props.renderCard(item);
        });
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

export default DetailViewLogic;
