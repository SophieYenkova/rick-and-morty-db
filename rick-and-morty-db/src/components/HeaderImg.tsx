import styled from "styled-components";

const StyledImg = styled.img`
  display: block;
  width: 100px;
  margin-left: 15px;
`;

const HeaderImg = () => {
    return (
        <StyledImg src="src/assets/img/rickandmorty.png"></StyledImg>
    )
}

export default HeaderImg;