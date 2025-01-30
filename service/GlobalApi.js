import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY

const axiosClient = axios.create({
    //base url from strapi admin localhost
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
})

//creating new endpoints

const CreateNewResume = (data) => axiosClient.post('/user-resumes', data)

export default {
    CreateNewResume
}