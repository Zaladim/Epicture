import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

const cols = 1

export default class SmallImage extends React.Component {
  render() {
    return (
      <View
        style={{
          height: Dimensions.get('window').width / cols,
          width: Dimensions.get('window').width / cols,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={{uri: this.props.imageUri}}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{this.props.name}</Text>
        </View> */}
      </View>
    )
  }
}