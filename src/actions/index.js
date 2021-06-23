import { DELETE_FAIL, DELETE_SUCCESS, DELETE_TASK, FETCH_FAIL, FETCH_SUCCESS, FETCH_TODO, POST_FAIL, POST_SUCCESS, POST_TODO } from "./actionTypes"

export const fetchList = ()=>{
    return{
        type: FETCH_TODO
    }
}
export const fetchListSuccess = (response)=>{
    return{
        type: FETCH_SUCCESS,
        response
    }
}
export const fetchListFail = (error)=>{
    return{
        type: FETCH_FAIL,
        error
    }
}

//post
export const postItem = (params)=>{
    return{
        type: POST_TODO,
        params
    }
}
export const postItemSuccess = (response)=>{
    return{
        type: POST_SUCCESS,
        response
    }
}
export const postItemFail = (error)=>{
    return{
        type: POST_FAIL,
        error
    }
}

//delete
export const deleteTask = (id)=>{
    return{
        type: DELETE_TASK,
        id
    }
}
export const deleteTaskSuccess = (response)=>{
    return{
        type: DELETE_SUCCESS,
        response
    }
}
export const deleteTaskFail = (error)=>{
    return{
        type: DELETE_FAIL,
        error
    }
}