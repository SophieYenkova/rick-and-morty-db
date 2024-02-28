import styled from "styled-components";
import { Character } from "../types";
import Flex from "./Flex";
import ErrorCard from "./ErrorCard";

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

const StyledLabel = styled.h3`
  font-weight: 700;
`;

const StyledImg = styled.img`
  max-width: 30vw;
  max-height: 25vh;
  border-radius: 50%;
  margin: 5px;
  box-shadow: 0px 0px 27px 5px rgba(4, 60, 110, 0.2);
`;

const StyledSpan = styled.span`
  color: #4595009d;
`;


const Card = ({ data }: { data: Character[] }) => {
  const renderItems = (arr: Character[]) => {
    if (!arr || arr.length === 0) {
      return <ErrorCard>characters not found</ErrorCard>;
    }
    return arr.map(({ id, name, gender, species, type, status, image }) => {
      if (type === "") {
        type = "no";
      }
      return (
        <StyledCard key={id}>
          <StyledUl>
            <li>
              <StyledImg src={image} alt={name} />
              <div className="">
                <StyledLabel>{name}</StyledLabel>
                <Flex direction="column" justify="center">
                  <StyledUl>
                    <li>
                      <StyledSpan>Status:</StyledSpan> {status}
                    </li>
                    <li>
                      <StyledSpan>Gender:</StyledSpan> {gender}
                    </li>
                    <li>
                      <StyledSpan>Species:</StyledSpan> {species}
                    </li>
                    <li>
                      <StyledSpan>Type: </StyledSpan> {type}
                    </li>
                  </StyledUl>
                </Flex>
              </div>
            </li>
          </StyledUl>
        </StyledCard>
      );
    });
  };

  const characters = renderItems(data);

  return <>{characters}</>;
};

export default Card;
