/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var events = require('./data.js');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class EventBriefView extends Component {
  render() {
    console.log(this.props.event);
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemDescription}>
          <Text style={styles.itemTitle}>{this.props.event.title}</Text>
          <Text style={styles.itemOwner}>By: {this.props.event.owner}</Text>
          <Text style={styles.itemExpiry}>{this.props.event.expiry}</Text>
        </View>
        <View style={styles.itemParticipants}>
          <Image source={{uri: this.props.event.pic}} style={styles.itemPicture}/>
          <Text style={styles.itemParticipantsCount}>+{this.props.event.attendants.length}</Text>
        </View>
      </View>
    );
  }
}

class YallaApp extends Component {
  render() {
    return (
      <View style={styles.eventList}>
        <EventBriefView event={events.data[0]}></EventBriefView>
        <EventBriefView event={events.data[1]}></EventBriefView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventList: {
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#ccc',
    paddingLeft: 20,
    margin:5,
    borderRadius: 5,
    height: 110
  },

  itemDescription: {
    flex: 1,
    alignItems: 'flex-start', // horizontally align items
    justifyContent: 'center'  //vertically align items
  },

  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  itemOwner: {
    fontSize: 16
  },

  itemExpiry: {
    fontSize: 16,
    fontStyle: 'italic'
  },

  itemParticipants: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemPicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10
  },

  itemParticipantsCount: {
    fontSize: 20,
  }
});

AppRegistry.registerComponent('YallaApp', () => YallaApp);
