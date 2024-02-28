import styled from "styled-components";
import Flex from "./Flex";
import { Character } from "rickmortyapi";

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCloseButton = styled.button`
  min-width: 10vw;
  min-height: 5vh;
  background-color: #88e23b;
  border-radius: 10px;
  font-size: 20px;
`;

const StyledCard = styled.div`
  padding: 10px;
  min-width: 25vw;
  max-width: 170px;
  min-height: 30vh;
  background-color: #ebe480;
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

interface PopupProps {
    popupData: Character | null;
    handleCloseButton: () => void; 
  }

const Popup = ({ popupData, handleCloseButton }: PopupProps) => {
if(!popupData) {
    return;
}
  const { id, name, gender, species, type, status, image, location, origin } =
    popupData;
  const hasType = type ? type : "no";
  return (
    <Flex justify="center" align="center" wrap="wrap" gap="20px">
      <StyledBackground>
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
                      <StyledSpan>Type: </StyledSpan> {hasType}
                    </li>
                    <li>
                      <StyledSpan>Location: </StyledSpan> {location.name}
                    </li>
                    <li>
                      <StyledSpan>Origin: </StyledSpan> {origin.name}
                    </li>
                  </StyledUl>
                </Flex>
              </div>
            </li>
          </StyledUl>
          <StyledCloseButton onClick={() => handleCloseButton()}>Close</StyledCloseButton>
        </StyledCard>
      </StyledBackground>
    </Flex>
  );
};

export default Popup;
