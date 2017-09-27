import React, {Component} from 'react';
import { Screens } from './config/router'


export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return <Screens />;
  }
}
