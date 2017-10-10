import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Picker} from 'react-native';

export default class PickerComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'All'
          }
    }
    onValueChange(key, value) {
        console.log(key + ':' + value)
        this.setState({category: value})
    }
    render() {
        return (  
            <Picker style = {{
                      height: 40,
                      backgroundColor: 'black',
                      color: 'white'
                    }}
            selectedValue = {
                this.state.category
            }
            onValueChange = {
                this.onValueChange.bind(this, 'category')
            }
            mode = 'dropdown' > 
            <item label="All" value="All"></item> 
            <item label="Clubs/Bars" value="Clubs/Bars" > </item> 
            <item label="CafeBars" value="CafeBars" ></item>
            <item label="Tsipouradika" value="Tsipouradika" > </item> 
            </Picker>
        );
    }
}
