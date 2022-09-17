import { createGlobalStyle } from "styled-components";
import Main from "./common/Main";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`;

const App = () => {
    return (
        <>
        <GlobalStyle />
        <Header />
        <Main>
            
        </Main>
        </>
    )
}

export default App;