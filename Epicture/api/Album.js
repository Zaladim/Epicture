import axiosConfig from `./axiosConfig`

module.exports = {
	getAlbum: async (albumHash) => {
        let user = await axiosConfig.get(`/3/album/${albumHash}`)
    
        return user.data
	},
	getAlbumImages: async (albumHash) => {
		let user = await axiosConfig.get(`/3/album/${albumHash}/images`)
    
        return user.data
	},
	getAlbumImage: async (albumHash, imageHash) => {
		let user = await axiosConfig.get(`/3/album/${albumHash}/image/${imageHash}`)
    
        return user.data
	},
	postAlbumCreation: async () => {
		axiosConfig.defaults.headers.common[`Authorization`] = `Bearer AccessToken`;

		let user = await axiosConfig.post(`/3/album`)
    
        return user.data
	},
	putUpdateAlbum: async (albumHash) => {
		axiosConfig.defaults.headers.common[`Authorization`] = `Bearer AccessToken`;

		let user = await axiosConfig.put(`/3/album/${albumHash}`)
    
        return user.data
	},
	delAlbumDeletionUnAuthed: async (albumDeleteHash) => {
		let user = await axiosConfig.put(`/3/album/${albumDeleteHash}`)
    
        return user.data
	},
	delAlbumDeletionAuthed: async (albumHash) => {
		let user = await axiosConfig.put(`/3/album/${albumHash}`)
    
        return user.data
	},
	postFavoriteAlbum: async (albumHash) => {
		let user = await axiosConfig.put(`/3/album/${albumHash}/favorite`)
    
        return user.data
	},
	postSetAlbumImageUnAuthed: async (albumDeleteHash) => {
		let user = await axiosConfig.put(`/3/album/${albumDeleteHash}`)
    
        return user.data
	},
	postSetAlbumImageAuthed: async (albumHash) => {
		axiosConfig.defaults.headers.common[`Authorization`] = `Bearer AccessToken`;
		
		let user = await axiosConfig.put(`/3/album/${albumHash}`)
    
        return user.data
	},
	postAddImagesToAnAlbumUnAuthed: async (albumDeleteHash) => {
		let user = await axiosConfig.put(`/3/album/${albumDeleteHash}/add`)
    
        return user.data
	},
	postAddImagesToAnAlbumAuthed: async (albumHash) => {
		axiosConfig.defaults.headers.common[`Authorization`] = `Bearer AccessToken`;

		let user = await axiosConfig.put(`/3/album/${albumHash}/add`)
    
        return user.data
	},
	postRemoveImagesToAnAlbumUnAuthed: async (albumDeleteHash) => {
		let user = await axiosConfig.put(`/3/album/${albumDeleteHash}/remove_images`)
    
        return user.data
	},
	postRemoveImagesToAnAlbumAuthed: async (albumHash) => {
		axiosConfig.defaults.headers.common[`Authorization`] = `Bearer AccessToken`;

		let user = await axiosConfig.put(`/3/album/${albumHash}/remove_images`)
    
        return user.data
	},
}