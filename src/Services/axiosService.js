import axios from 'axios';
// const httpService = new Axios();
export default class axiosService {

  post=(url, data, isHeaderRequired=false) => {
    return  axios.post(url, data, isHeaderRequired)
      }
      
}
