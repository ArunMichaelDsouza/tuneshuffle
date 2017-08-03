// User reducer

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ADMIN':
        case 'SET_ADMIN':
            return { ...state, 'admin': action.payload.data, 'allUsers': [] };        
        default:
            return state;
    }
};

export default userReducer;