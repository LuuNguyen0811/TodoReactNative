import { DELETE_FAIL, FETCH_FAIL, FETCH_SUCCESS, POST_FAIL, POST_SUCCESS } from "../actions/actionTypes";

const todoReducer = (data = [], action) => {
    console.log('actionnn',action);
    switch (action.type) {
        //GET
        case FETCH_SUCCESS:
            return action.response;
        case FETCH_FAIL:
            return [];

        //POST
        // case POST_SUCCESS:
        //     return 'Success'
        case POST_FAIL:
            return []
        case DELETE_FAIL:
            return []    
        default:
            return data; //state does not change
    }
}

export default todoReducer;