import styled from "styled-components";
import { Character } from "rickmortyapi";
import Flex from "./Flex";

const StyledCard = styled.div`
  padding: 10px;
  min-width: 25vw;
  max-width: 170px;
  min-height: 30vh;
  background-color: #ffffff5b;
  border-radius: 8px;
  box-shadow: 4px 4px 56px -33px rgba(4, 60, 110, 0.2);
`;

const StyledUl = styled.ul`
  margin: 10px;
  display: block;
  list-style-type: none;
`;

const StyledLi = styled.li`
   @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const StyledLabel = styled.h3`
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const StyledImg = styled.img`
  max-width: 60%;
  max-height: 60%;
  border-radius: 50%;
  margin: 5px;
  box-shadow: 0px 0px 27px 5px rgba(4, 60, 110, 0.2);
`;

const StyledSpan = styled.span`
  color: #4595009d;
`;


const Card = ({ cardData, onCardClick }: { cardData: Character, onCardClick: (character: Character['id']) => void }) => {
  const { id, name, gender, species, type, status, image } = cardData;
  const hasType =  type ? type : 'no';

      return (
        <StyledCard key={id} onClick={() => onCardClick(id)}>
          <StyledUl>
            <StyledLi>
              <StyledImg src={image} alt={name} />
              <div className="">
                <StyledLabel>{name}</StyledLabel>
                <Flex direction="column" justify="center">
                  <StyledUl>
                    <StyledLi>
                      <StyledSpan>Status:</StyledSpan> {status}
                    </StyledLi>
                    <StyledLi>
                      <StyledSpan>Gender:</StyledSpan> {gender}
                    </StyledLi>
                    <StyledLi>
                      <StyledSpan>Species:</StyledSpan> {species}
                    </StyledLi>
                    <StyledLi>
                      <StyledSpan>Type: </StyledSpan> {hasType}
                    </StyledLi>
                  </StyledUl>
                </Flex>
              </div>
            </StyledLi>
          </StyledUl>
        </StyledCard>
      );
};

export default Card;
