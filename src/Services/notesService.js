import Axios from './axiosService.js';
const axios = new Axios();
export default class NotesService {
    baseUrl='http://fundoonotes.incubation.bridgelabz.com/api/';
    saveNotes = (data, token) => {
        return axios.post(`${this.baseUrl}notes/addNotes`, data, {
            headers: {
                Authorization: `${token}`,
            }
        });
    }
}