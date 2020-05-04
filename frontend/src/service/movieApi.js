import axios from 'axios';

const movieApi = axios.create({
    baseURL: 'http://arttandrade.ddns.net:3333',
});

export default movieApi;