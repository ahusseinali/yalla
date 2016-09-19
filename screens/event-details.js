import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class EventDetailsScreen extends Component {
  // Title is contained in a wrapper view to hack displaying border bottom in Android.
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomBorder}>
          <Text style={styles.title}>{this.props.event.title}</Text>
        </View>
        <Text style={styles.normal}>Current Plan: </Text>
        <Text style={styles.content}>Let's meet</Text>
        <TouchableOpacity>
          <Text style={styles.selectable}>{this.props.event.expiry}</Text>
        </TouchableOpacity>
        <Text style={styles.content}>at</Text>
        <TouchableOpacity>
          <Text style={styles.selectable}>{this.props.event.place}</Text>
        </TouchableOpacity>
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

  bottomBorder: {
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 20
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  normal: {
    fontSize: 16
  },

  content: {
    fontSize: 40
  },

  selectable: {
    fontSize: 40,
    backgroundColor: '#add8e6'
  }
});

module.exports = EventDetailsScreen;
