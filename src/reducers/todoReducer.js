import { DELETE_FAIL, DELETE_SUCCESS, FETCH_FAIL, FETCH_SUCCESS, POST_FAIL, POST_SUCCESS, POST_TODO } from "../actions/actionTypes";
const initState = {
    data: [],
    loading: true
}
const todoReducer = (state = initState, action) => {
    console.log('actionnn',state);
    switch (action.type) {
        //GET
        case FETCH_SUCCESS:
            return {
                ...state,
                data : action.response,
                loading: false
            }
        case FETCH_FAIL:
            return {
                ...state,
                loading: false
            }

        //POST
        case POST_TODO:
            return{
                ...state,
                loading: true
            }
        case POST_SUCCESS:
            return {
                ...state,
                loading:false
            }
        case POST_FAIL:
            return {
                ...state,
                loading: false
            }
        case DELETE_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case DELETE_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state; //state does not change
    }
}

export default todoReducer;