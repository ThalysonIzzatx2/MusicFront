import axios from 'axios';
const api = axios.create({
    baseURL:"https://thalysonfy-back.herokuapp.com/",
    //timeout: 10000,
})
export default api;