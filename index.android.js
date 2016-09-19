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
  View,
  ListView,
  TouchableOpacity
} from 'react-native';

class YallaApp extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(events.data),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello Ahmed!</Text>
        <ListView style={styles.eventList}
          dataSource={this.state.dataSource}
          renderRow={(event) => {return this._renderEventBrief(event)}} />
      </View>
    );
  }

  _renderEventBrief(event) {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={(e) => console.log(event)}>
        <View style={styles.itemDescription}>
          <Text style={styles.itemTitle}>{event.title}</Text>
          <Text style={styles.itemOwner}>By: {event.owner}</Text>
          <Text style={styles.itemExpiry}>{event.expiry}</Text>
        </View>
        <View style={styles.itemParticipants}>
          <Image source={{uri: event.pic}} style={styles.itemPicture}/>
          <Text style={styles.itemParticipantsCount}>+{event.attendants.length}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },

  welcome: {
    fontSize: 30,
    paddingLeft: 30
  },

  eventList: {
    paddingTop: 10
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
