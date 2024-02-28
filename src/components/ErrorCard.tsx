import styled from "styled-components";
import { Props } from "../types";

const StyledErrorCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  min-width: 30vw;
  max-width: 170px;
  min-height: 5vh;
  background-color: #ffffff5b;
  color: #ff6347;
  border-radius: 8px;
  box-shadow: 4px 4px 56px -33px rgba(4, 60, 110, 0.2);
`;

const ErrorCard = ({ children }: Props) => {
  return <StyledErrorCard>{children}</StyledErrorCard>;
};

export default ErrorCard;
