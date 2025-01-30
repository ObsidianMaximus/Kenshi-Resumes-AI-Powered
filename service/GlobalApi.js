import axios from 'axios';
const API_KEY = import.meta.env.VITE_STRAPI_API_KEY

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

const GetUserResumes = (userEmail) => axiosClient.get('/user-resumes?filters[userEmail][$eq]=' + userEmail)//fetching resumes based on user email

export default {
    CreateNewResume,
    GetUserResumes
}