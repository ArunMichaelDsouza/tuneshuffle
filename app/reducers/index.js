import { combineReducers } from 'redux';

const userReducer = (state={}, action) => {
	switch(action.type) {
		case 'INIT_STORE':			
			return { ...state, 'all': action.payload };
		case 'SELECT_USER':
			return { ...state, 'selected': action.payload };
		case 'FETCH_USERS':
			return { ...state, 'usersFromApi': action.payload }
		default:
			return state;
	}
};

const allReducers = combineReducers({
	users: userReducer
});

export default allReducers;