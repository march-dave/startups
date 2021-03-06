/* application/components/activity/ActivityView.js */
import React, { Component } from 'react';

import ProfileView from '../profile/ProfileView';
// import ProfileDetail from '../profile/ProfileDetail';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  MapView
} from 'react-native';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../../styles/colors';
import { globals, activityStyles } from '../../styles';

// Data List retrieve
import { upcomingEvent, FakeNotifications } from '../../fixtures';

const styles = activityStyles;

const ActivityMap = ({ event }) => {
  const mapRegion = {
    latitude: event.location.lat,
    longitude: event.location.lng,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  let markers = [
    {
      latitude: -27.4679542,
      longitude: 153.0063908,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];

  return (
    <MapView
      style={globals.map}
      region={mapRegion}
      annotations={markers}
    />
  )
};

const Notification = ({ notification }) => (
  <TouchableOpacity style={[globals.flexRow, globals.ph1]}>
    <View style={globals.flex}>
      <View style={globals.flexRow}>
        <View style={styles.circle}/>
        <View style={[globals.textContainer, globals.pv1]}>
          <Text style={styles.h4}>
            New {notification.type}
          </Text>
        </View>
        <Text style={styles.h5}>
          {moment(new Date(new Date(notification.createdAt))).fromNow()}
        </Text>
      </View>
      <View style={globals.flex}>
        <Text style={styles.messageText}>
          {notification.message}
        </Text>
      </View>
    </View>
    <View>
      <Icon name='ios-arrow-forward' color='#777' size={25} />
    </View>
  </TouchableOpacity>
)

class Activity extends Component{

  render() {

    let titleConfig = { title: 'Activity', tintColor: 'white' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
        <ScrollView>
          <TouchableOpacity>
            <View style={[globals.flexRow, globals.mb1]}>
              <Text style={styles.h4}>
                Public Location
              </Text>
              <Text style={globals.primaryText}>
                {
                  // upcomingEvent.name
                }
              </Text>
            </View>
            <Text style={[styles.dateText, globals.mb1]}>
              {
                // moment(new Date(upcomingEvent.start)).format('dddd MMM Do, h:mm a')
              }
            </Text>
          </TouchableOpacity>

          <ActivityMap event={upcomingEvent}/>



          <View>
            <Text style={[styles.h4, globals.mv1]}>

            </Text>
            <View style={globals.divider}/>


            <View style={globals.flex}>
              {FakeNotifications.map((n, idx) => (
                <View key={idx} style={globals.flex}>
                  <Notification notification={n} />
                </View>
              ))}
              <View style={styles.emptySpace} />
            </View>

          

          </View>

        </ScrollView>
      </View>
    );
  }
};

export default Activity;
