import axiosConfig from './axiosConfig'

/* const getAccessToken = async (clientId) => { */
async function getAccessToken(clientId) {
    axiosConfig.defaults.headers.common['Authorization'] = '';
    
    let userURL = await axios.get(`https://api.imgur.com/oauth2/authorize?client_id=${clientId}&response_type=token&state=''`);

    return userURL;
}

export default Auth