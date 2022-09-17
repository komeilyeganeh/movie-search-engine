import styled from "styled-components";
import Input from "./common/Input";

const Div = styled.div`
    display: flex;
    justify-content: center;
`;

const Search = ({ onSearch }) => {
    return (
        <Div>
            <Input type="text" placeholder="movie name..." onChange={(e) => onSearch(e)}/>
        </Div>
    )
}

export default Search;