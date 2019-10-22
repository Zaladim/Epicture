import axiosConfig from './axiosConfig'

module.exports = {
  getUserBasicInformation: async (username) => {
      let user = await axiosConfig.get(`/3/account/${username}`);

      return user.data.data
  },
  getAccountImages: async () => {
      axiosConfig.defaults.headers.common[`Authorization`] = `Bearer AccessToken`;

      let user = await axiosConfig.get(`/3/account/me/images`);

      return user.data
  },
  getAccountGalleryFavorites: async () => {
      axiosConfig.defaults.headers.common[`Authorization`] = `Bearer AccessToken`;

      let user = await axiosConfig.get(`/3/account/me/gallery_favorites/{{page}}/{{favoritesSort}}`)
  
      return user.data
  },
  getAccountFavorites: async () => {
      axiosConfig.defaults.headers.common[`Authorization`] = `Bearer 47a0643bcecabb232c36f3898ae0b01172d9506e`;

      let user = await axiosConfig.get(`/3/account/me/favorites/`)
  
      return user.data.data
  }
}