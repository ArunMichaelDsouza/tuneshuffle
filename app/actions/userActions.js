// User actions 

import axios from 'axios';
import { API, ACTIONS } from '../../lib/constants';

const USER = ACTIONS.USER,
    getAdmin = () => {
        const request = axios.get(`${API.ENDPOINT}${API.USER}/getAdmin`);

        return dispatch => {
            request.then(data => {
                dispatch({ type: USER.GET_ADMIN, payload: data.data });
            });
        };
    };

export { getAdmin };