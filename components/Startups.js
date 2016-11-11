import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ListView
} from 'react-native'

class Startups extends Component {

  constructor(props, context) {
    super(props, context)
    const startups = [
      {id:0, name:'uber', industry: 'transportation' },
      {id:1, name:'air bnb', industry: 'hospitality' },
      {id:3, name:'instagram', industry: 'social' }
    ]

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      startups: dataSource.cloneWithRows(startups)
    }
  }

  renderRow = (startup, sId, rId) => {
    return (
      <TouchableOpacity onPress={this.selectStartup.bind(this, startup)}>
        <Text>{startup.name}</Text>
      </TouchableOpacity>
    )
  }

  selectStartup = (startup) => {
    console.log('selectStartup' + JSON.stringify(startup));
  }

  renderRow(startup, sId, rId) {
    return (
      <Text>{startup.name}</Text>
    )
  }

  render() {
    return(
      <View>
        <ListView
          dataSource={this.state.startups}
          renderRow={this.renderRow} />
      </View>
    );
  }
}
export default Startups;
