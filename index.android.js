/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import EventListScreen from './screens/event-list';
import EventDetailsScreen from './screens/event-details';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

class YallaApp extends Component {
  render() {
    return(
      <Navigator
        initialRoute={{ident: "EventList"}}
        ref="appNavigator"
        style={styles.navigatorStyle}
        renderScene={this._renderScene} />
    );
  }

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator };

    switch(route.ident) {
      case "EventList":
        return(
          <EventListScreen {...globalNavigatorProps} />
        )
      case "EventDetails":
        return(
          <EventDetailsScreen {...globalNavigatorProps} />
        )
      default:
        return(
          <EventListScreen {...globalNavigatorProps} />
        )
    }
  }
}

const styles = StyleSheet.create({
  navigatorStyle: {}
});

AppRegistry.registerComponent('YallaApp', () => YallaApp);
