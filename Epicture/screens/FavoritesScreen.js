import React from 'react'
import { Text , View, StatusBar, ScrollView } from 'react-native'

import SmallImage from '../components/SmallImage'
import Gallery from '../api/Gallery'
import Account from '../api/Account'
import Loading from '../components/Loading'

export default class FavoritesScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      favoriteImages: []
    }
  }

  async componentDidMount() {
    this.fetchFavorites()
  }

  async componentDidUpdate() {
    this.fetchFavorites()
  }

  async fetchFavorites() {
    let images = []
    let res = await Account.getAccountFavorites()

    for (image of res) {

      let imageLink = (image.is_album) ? await Gallery.getImageFromAlbum(image.id)
                                       : await Gallery.getImage(image.id)

      let link = imageLink.is_album ? imageLink.images[0].link 
                                    : imageLink.link

      images.push(link)
    }

    this.setState({
      isLoading: false,
      favoriteImages: images
    })
  }

  renderFavorites() {
    return this.state.favoriteImages.map(data => {
      return (
        <SmallImage
          style={{width: 50, height: 50}}
          key={data}
          imageUri={data}
          />
      )
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    }
    return (
      <View>
        <StatusBar translucent barStyle="dark-content"/>
        <ScrollView>
          { this.renderFavorites() }
        </ScrollView>
      </View>
    )
  }
}

FavoritesScreen.navigationOptions = {
  title: 'Favorites'
}