import axiosConfig from './axiosConfig'

module.exports = {
    uploadImage: async (data) => {
        console.log("ENTER UPLOAD API")
        console.log(data)
        axiosConfig.defaults.headers.common['Accept'] = 'application/json'
        axiosConfig.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        let res = await axiosConfig.post('/3/upload', data)

        console.log(res.status)
    }
}