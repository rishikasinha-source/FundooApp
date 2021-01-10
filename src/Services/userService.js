import Axios from './axiosService.js';
const axios=new Axios();
export default class UserService {
    baseUrl='http://fundoonotes.incubation.bridgelabz.com/api/';
    registration = (data) => {
       return axios.post(`${this.baseUrl}user/userSignUp`,data) 
    }
    signin = (data) => {
       return axios.post(`${this.baseUrl}user/login`,data) 
    }
    forgotpassword = (data) => {
        return axios.post(`${this.baseUrl}user/reset`,data)
    }
    resetpassword = (data,token) => {
        return axios.post(`${this.baseUrl}user/reset-password`,data,{
            headers: {
               Authorization: `${token}`,
            },
        });
    }  
}
