import React from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#0c9"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})