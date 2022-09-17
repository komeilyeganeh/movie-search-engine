import HeaderEl from "./common/Header";
import { Link } from "react-router-dom";
import styled from "styled-components";

const A = styled.a`
    > a {
        text-decoration: none;
        font-size: 1.2rem;
        letter-spacing: 10px;
        font-weight: bold;
    }
`;

const Header = () => {
    return (
        <HeaderEl>
            <A><Link to="/" style={{ color: "#fff" }}>MovieSearch</Link></A>
        </HeaderEl>
    )
};

export default Header;