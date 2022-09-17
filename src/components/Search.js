import styled from "styled-components";
import Input from "./common/Input";

const Div = styled.div`
    display: flex;
    justify-content: center;
`;

const Search = () => {
    return (
        <Div>
            <Input type="text" placeholder="movie name..."/>
        </Div>
    )
}

export default Search;