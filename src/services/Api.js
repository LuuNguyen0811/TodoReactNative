import axios from "axios";

const url = 'https://60cbfd0871b73400171f6d15.mockapi.io/api/getList/';

const httpClient = axios.create({
    baseURL: url,
})

httpClient.interceptors.request.use(
     async function (config) {
        config.baseURL = url
        console.log(config);
        return config
    },
    function (error) {
        return Promise.reject(error)
    },
)

httpClient.interceptors.response.use(
    function (response) {
        console.log('response',response);

        return response
    },
    function (error) {
        console.log(error);
        return Promise.reject(error)
    },
)


function* getTodoFromApi() {
    const response = yield httpClient.get('todo')  
    return response
}

const postTodo=()=>{
    const response =  httpClient.post('todo')
    return response
}
export const Api = {
    getTodoFromApi,
    postTodo
}; 