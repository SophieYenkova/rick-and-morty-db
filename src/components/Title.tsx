import {Props} from "../types";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    color: #acf23c;
    `

const Title = ({ children }: Props) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}

export default Title;