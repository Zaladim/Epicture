import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  View
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";

export default class StartScreen extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Home")
    }, 3000);
  }
  render() {
    const { navigation } = this.props;
  
    return (
      <Block flex style={styles.container}>
        <StatusBar translucent></StatusBar>
        <Block center>
          <Image
              source={{ uri: 'https://cdn.discordapp.com/attachments/345175292525936641/632339126288646152/ebiteture.png' }}
              style={styles.logo}
            />
        </Block>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            Epitech Project - 2019
          </Text>
        </View>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.COLORS.BASE
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 350,
    height: 300
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  }
});
