import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

class EventDetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.event.title}</Text>
        <Text style={styles.normal}>Current Plan: </Text>
        <Text style={styles.content}>Let's meet</Text>
        <Text style={styles.selectable}>{this.props.event.expiry}</Text>
        <Text style={styles.content}>at</Text>
        <Text style={styles.selectable}>{this.props.event.place}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 20
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  normal: {
    fontSize: 16
  },

  content: {
    fontSize: 35
  },

  selectable: {
    fontSize: 35,
    backgroundColor: '#add8e6'
  }
});

module.exports = EventDetailsScreen;
