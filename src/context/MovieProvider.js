import { useEffect, useState } from "react";
import { movieApi } from "../apis/movieApi";
import { MovieContext } from "./MovieContext";

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handlerSearchInput = (e) => {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        const initialSearch = async () => {
            const { data } = await movieApi.get("", {
                params: {
                    s: inputValue
                }
            });
            setMovies(data.Search);
        }
        initialSearch();
    }, [inputValue]);

    return (
        <MovieContext.Provider value={{ movies, onSearch: handlerSearchInput }}>
            { children }
        </MovieContext.Provider>
    )
}
export default MovieProvider;