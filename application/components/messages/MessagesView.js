/* application/components/messages/MessagesView.js */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import { find, isEqual } from 'underscore';
import Colors from '../../styles/colors';
import { FakeConversations, FakeUsers, currentUser } from '../../fixtures';
import { globals, messagesStyles } from '../../styles';
import { rowHasChanged } from '../../utilities';

const styles = messagesStyles;

class MessagesView extends Component{
  constructor(){
    super();
    this._renderRow = this._renderRow.bind(this);
    this.dataSource = this.dataSource.bind(this);
  }

  _renderRow(conversation){
    return (
      <Text>{conversation.lastMessageText}</Text>
    )
  }
  dataSource(){
    return (
      new ListView.DataSource({
        rowHasChanged: (r1,r2) => r1 != r2
      })
      .cloneWithRows(FakeConversations)
    );
  }
  render() {
    let titleConfig = { title: 'Messages', tintColor: 'white' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
        />
        <ListView
          dataSource={this.dataSource()}
          contentInset={{ bottom: 49 }}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
};

export default MessagesView;
