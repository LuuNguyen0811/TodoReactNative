import axios from "axios";

const urlGetMovies = 'https://jsonplaceholder.typicode.com/todos';

const httpClient = axios.create({
    baseURL: 'https://60cbfd0871b73400171f6d15.mockapi.io/api/getList/',
})

httpClient.interceptors.request.use(
     async function (config) {
        config.baseURL = 'https://60cbfd0871b73400171f6d15.mockapi.io/api/getList/'
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
    const response = yield httpClient.get('todos')
    // const response = yield fetch(urlGetMovies, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: '',
    // });
    // const todos = yield response.status === 200 ? response.json(): []       
    return response
}

const postTodo=()=>{
    const response =  httpClient.post('todos')
    return response
}
export const Api = {
    getTodoFromApi,
    postTodo
}; 