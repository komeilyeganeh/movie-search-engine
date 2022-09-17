import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./common/Main";
import Header from "./Header";
import Home from "./Home";
import MovieInfo from "./MovieInfo";

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
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path={`/movie-info/:title`} element={<MovieInfo />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
};

export default App;
