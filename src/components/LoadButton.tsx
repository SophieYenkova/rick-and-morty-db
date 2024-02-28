import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledButton = styled.button`
  padding: 10px;
  min-width: 15vw;
  min-height: 5vh;
  background-color: #88e23b;
  border-radius: 10px;
  font-size: 20px;
`;

const LoadButton = ({ onLoadMore }: { onLoadMore: () => void }) => {
  return (
    <StyledContainer>
      <StyledButton onClick={onLoadMore}>Load more</StyledButton>
    </StyledContainer>
  );
};

export default LoadButton;
