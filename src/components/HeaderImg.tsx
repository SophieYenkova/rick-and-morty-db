import styled from "styled-components";

const StyledImg = styled.img`
  display: block;
  width: 100px;
  margin-left: 15px;

  @media screen and (max-width: 768px) {
    width: 25%;
  }
  @media screen and (max-width: 1200px) {
    width: 17%;
  }
`;

const HeaderImg = () => {
    return (
        <StyledImg src="src/assets/img/rickandmorty.png"></StyledImg>
    )
}

export default HeaderImg;