import styled from "styled-components";
import {Props} from "../types";

const StyledHeader = styled.header`
  padding: 10px;
  background-color: #000000;
  margin-bottom: 20px;
`;



const Header = ({ children }: Props) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );
};

export default Header;
