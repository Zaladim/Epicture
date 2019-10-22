import React from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList
} from 'react-native';

import Gallery from '../api/Gallery'
import Loading from '../components/Loading'
import SmallImage from '../components/SmallImage';
export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      images: null
    }
  }

  async componentDidMount() {
    let validTypes = ['jpg', 'png']
    let content = []
    let images = await Gallery.getGalleries()
  
    for (let i = 0; i < 12; i++) {
      let acc_url = images[i].account_url
      let title = images[i].title
      let desc = images[i].desc
      let link = images[i].images[0].link
  
      if (link && validTypes.indexOf(link.substring(link.length, link.length - 3)) != -1) {
        let image = {
          'author': acc_url,
          'title': title,
          'desc': desc == null || desc == undefined ? '' : desc,
          'link': link
        }
        content.push(image)
      }
    }

    this.setState({
      isLoading: false,
      images: content
    })
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    }
    return (
      <View style={{padding: 10}}>
        <StatusBar translucent barStyle="dark-content"/>
        <FlatList
          data={this.state.content}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={2}
        />
      </View>
    );
  }
} 

HomeScreen.navigationOptions = {
  title: 'Home'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30,
  }
});