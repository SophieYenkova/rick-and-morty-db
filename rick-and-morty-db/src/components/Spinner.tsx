import styled from "styled-components";

const StyledSpinner = styled.div`
  position: fixed;
  bottom: 50%;
  left: 50%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #88e23b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <StyledSpinner></StyledSpinner>;
};

export default Spinner;
