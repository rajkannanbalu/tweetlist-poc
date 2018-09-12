import React, { Component } from 'react';
import Header from './Header/index';
import TweetList from './TweetList/index';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header headerTitle="POCAPP"/>
      <TweetList size={10} />
      </div>
    );
  }
}
