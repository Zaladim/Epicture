import axiosConfig from './axiosConfig'

module.exports = {
    getGalleries: async (section = 'hot', sort = 'viral') => {
        let res = await axiosConfig.get(`/3/gallery/${section}/${sort}`)

        return res.data.data
    },
    getImagesByTag: async (tag) => {
        let res = await axiosConfig.get(`/3/gallery/t/${tag}`)

        res = res.data.data.items;
        let images = []

        /* images.forEach(element => {
            console.log(element.link)
        }) */
        for (elem of res) {
            let image = {
                title: elem.title,
                link: elem.link
            }
            images.push(image)
        }

        return images
    },
    getImageFromAlbum: async (hash) => {
        let res = await axiosConfig.get(`/3/gallery/album/${hash}`)

        return res.data.data
    },
    getImage: async (hash) => {
        let res = await axiosConfig.get(`/3/gallery/image/${hash}`)

        return res.data.data
    }
}