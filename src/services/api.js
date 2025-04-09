import axios from "axios";

//URL da API = https://api.themoviedb.org/3/movie/now_playing?api_key=dfff41e5a597e2e1ab764d01aab04ee4
// base URL = https://api.themoviedb.org/3
// Api_Key = ?api_key=dfff41e5a597e2e1ab764d01aab04ee4

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;