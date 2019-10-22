import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
  View,
  Platform,
  WebView,
  TouchableNativeFeedbackBase
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { connect } from 'react-redux'

import Account from '../api/Account'
import Loading from '../components/Loading'
import NotLoggedIn from '../components/NotLoggedIn'
import axiosConfig from '../api/axiosConfig'
import { setToken } from '../authActions'

import getAccessToken from '../helpers/parseURL'

import { Images } from "../constants/Images"
import { bindActionCreators } from "redux";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

const StatusHeight = StatusBar.currentHeight;
const HeaderHeight = (theme.SIZES.BASE * 3.5 + (StatusHeight || 0));

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isAuthed: false,
      isLoading: true,
      user: null
    }
  }

  async componentDidMount() {
    let user = await Account.getUserBasicInformation("Nymrinae")
    console.log(user)
  
    this.setState({
      isLoading: false,
      user: user
    })
  }

  async componentDidUpdate() {
    this.renderProfile()
  }

  render() {
    const { navigation } = this.props;
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    }
    if (!this.state.isAuthed) {
      return (
        <WebView
          source={{ uri: 'https://api.imgur.com/oauth2/authorize?client_id=93e343f2f357d2b&response_type=token' }}
          onNavigationStateChange={navState => {
            if (!navState.url.startsWith('https://app')) {
              let accessToken = getAccessToken(navState.url)
              /* this.setState({
                isAuthed: false
              }) */
            }
            //this.props.navigation.navigate('Home')
          }}
        />
      )
    }
    return this.renderProfile()
  }

  renderProfile() {
    return (
      <Block flex style={styles.profile}>
      <StatusBar translucent barStyle="dark-content"/>
      <Block flex>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: '25%' }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={{ uri: this.state.user.avatar }}
                  style={styles.avatar}
                />
              </Block>
              {/* <Block style={styles.info}>
                <Block
                  middle
                  row
                  space="evenly"
                  style={{ marginTop: 20, paddingBottom: 24 }}
                >
                </Block>
                <Block row space="between">
                  <Block middle>
                    <Text
                      bold
                      size={12}
                      color="#525F7F"
                      style={{ marginBottom: 4 }}
                    >
                      2K
                    </Text>
                    <Text size={12}>Orders</Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      color="#525F7F"
                      size={12}
                      style={{ marginBottom: 4 }}
                    >
                      10
                    </Text>
                    <Text size={12}>Photos</Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      color="#525F7F"
                      size={12}
                      style={{ marginBottom: 4 }}
                    >
                      89
                    </Text>
                    <Text size={12}>Comments</Text>
                  </Block>
                </Block>
              </Block> */}
              <Block flex>
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color="#32325D">
                    { this.state.user.url }
                  </Text>
                  <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                    { this.state.user.reputation + " Pts - " + this.state.user.reputation_name }
                  </Text>
                </Block>
                <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block middle>
                  <Text
                    size={16}
                    color="#525F7F"
                    style={{ textAlign: "center" }}
                  >
                    { this.state.user.bio }
                  </Text>
                </Block>
                <Block
                  row
                  style={{ paddingVertical: 14, alignItems: "baseline" }}
                >
                  <Text bold size={16} color="#525F7F">
                    Album
                  </Text>
                </Block>
                <Block
                  row
                  style={{ paddingBottom: 20, justifyContent: "flex-end" }}
                >
                </Block>
                {/* <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                  <Block row space="between" style={{ flexWrap: "wrap" }}>
                    {Images.Viewed.map((img, imgIndex) => (
                      <Image
                        source={{ uri: img }}
                        key={`viewed-${img}`}
                        resizeMode="cover"
                        style={styles.thumb}
                      />
                    ))}
                  </Block>
                </Block> */}
              </Block>
            </Block>
          </ScrollView>
      </Block>
      {/* <ScrollView showsVerticalScrollIndicator={false} 
                  contentContainerStyle={{ flex: 1, width, height, zIndex: 9000, backgroundColor: 'red' }}>
      <Block flex style={styles.profileCard}>
        <Block middle style={styles.avatarContainer}>
          <Image
            source={{ uri: Images.ProfilePicture }}
            style={styles.avatar}
          />
        </Block>
        <Block style={styles.info}>
          <Block
            middle
            row
            space="evenly"
            style={{ marginTop: 20, paddingBottom: 24 }}
          >
            <Button small style={{ backgroundColor: argonTheme.COLORS.INFO }}>
              CONNECT
            </Button>
            <Button
              small
              style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
            >
              MESSAGE
            </Button>
          </Block>

          <Block row space="between">
            <Block middle>
              <Text
                bold
                size={12}
                color="#525F7F"
                style={{ marginBottom: 4 }}
              >
                2K
              </Text>
              <Text size={12}>Orders</Text>
            </Block>
            <Block middle>
              <Text bold size={12} style={{ marginBottom: 4 }}>
                10
              </Text>
              <Text size={12}>Photos</Text>
            </Block>
            <Block middle>
              <Text bold size={12} style={{ marginBottom: 4 }}>
                89
              </Text>
              <Text size={12}>Comments</Text>
            </Block>
          </Block>
        </Block> 
        <Block flex>
            <Block middle style={styles.nameInfo}>
              <Text bold size={28} color="#32325D">
                Jessica Jones, 27
              </Text>
              <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                San Francisco, USA
              </Text>
            </Block>
            <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
              <Block style={styles.divider} />
            </Block>
            <Block middle>
              <Text size={16} color="#525F7F" style={{ textAlign: "center" }}>
                An artist of considerable range, Jessica name taken by
                Melbourne …
              </Text>
              <Button
                color="transparent"
                textStyle={{
                  color: "#233DD2",
                  fontWeight: "500",
                  fontSize: 16
                }}
              >
                Show more
              </Button>
            </Block>
            <Block
              row
              style={{ paddingVertical: 14, alignItems: "baseline" }}
            >
              <Text bold size={16} color="#525F7F">
                Album
              </Text>
            </Block>
            <Block
              row
              style={{ paddingBottom: 20, justifyContent: "flex-end" }}
            >
              <Button
                small
                color="transparent"
                textStyle={{ color: "#5E72E4", fontSize: 12 }}
              >
                View all
              </Button>
            </Block>
            <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
              <Block row space="between" style={{ flexWrap: "wrap" }}>
                {Images.Viewed.map((img, imgIndex) => (
                  <Image
                    source={{ uri: img }}
                    key={`viewed-${img}`}
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                ))}
              </Block>
            </Block>
        </Block>
      </Block>
                </ScrollView> */}
      </Block>
    )
  }
}

ProfileScreen.navigationOptions = {
  title: 'My Profile'
};

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});