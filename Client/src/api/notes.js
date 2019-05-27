import axios from 'axios';
const notes = axios.create({
    baseURL : 'http://localhost:3001'
})
export default notes