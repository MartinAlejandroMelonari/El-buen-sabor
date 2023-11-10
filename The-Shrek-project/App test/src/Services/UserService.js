import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:9000/api/v1/Usuario';

export class GetAllUsersService {

    getUsers(){
        return axios.get(BASE_REST_API_URL);
    }
}
