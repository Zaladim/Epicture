import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.imgur.com',
    headers: {
        'Authorization': '93e343f2f357d2b'
        //'Authorization': 'Bearer 47a0643bcecabb232c36f3898ae0b01172d9506e'
    }
});

export default axiosInstance;