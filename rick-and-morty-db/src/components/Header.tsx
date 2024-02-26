import styled from "styled-components";
import Props from "../types";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  height: 20vh;
  padding: 20px;
  background-color: #000000;
`;

const StyledImg = styled.img`
  width: 100px;
  margin-left: 20px;
`;

const Header = ({ children }: Props) => {
    return (
        <StyledHeader>
            {children}
            <StyledImg src="src/assets/img/rickandmorty.png"></StyledImg>
        </StyledHeader>
    );
};

export default Header;
