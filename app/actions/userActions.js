// User actions 

import axios from 'axios';
import { API, ACTIONS } from '../../lib/constants';

const USER = ACTIONS.USER,
	adminRequest = `${API.ENDPOINT}${API.USER}/admin`,
    getAdmin = () => {
        return dispatch => {
        	const request = axios.get(adminRequest);

            request.then(data => {
                dispatch({ type: USER.GET_ADMIN, payload: data.data });
            });
        };
    },
    setAdmin = name => {
    	return dispatch => {
        	const request = axios.post(adminRequest, { name });

            request.then(data => {
                dispatch({ type: USER.SET_ADMIN, payload: data.data });
            });
        };
    },
    getAllUsers = () => {
        return dispatch => {
            axios.get(`${API.ENDPOINT}${API.USER}/all`).then(data => {
                dispatch({ type: USER.GET_ALL_USERS, payload: data.data });
            });
        };
    };

export { getAdmin, setAdmin, getAllUsers };