import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Main from "./common/Main";
import Content from "./Content";
import Header from "./Header";
import Search from "./Search";
import { movieApi } from "../apis/movieApi";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        background-color: #f4f4f4;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e4e1e9' fill-opacity='0.69'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
`;

const App = () => {
    const [ movies, setMovies ] = useState([]);
    useEffect(() => {
        const initialSearch = async () => {
            const { data } = await movieApi.get("", {
                params: {
                    s: "car"
                }
            });
            setMovies(data.Search);
        }
        initialSearch();
    }, []);

    return (
        <>
        <GlobalStyle />
        <Header />
        <Main>
            <Search />
            <Content />
        </Main>
        </>
    )
}

export default App;