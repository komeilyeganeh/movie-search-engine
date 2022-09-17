import axios from "axios";

const KEY_API = "7f76daa9";

export const movieApi = axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${KEY_API}`
});
