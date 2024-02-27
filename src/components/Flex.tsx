import styled from "styled-components";
import { FlexProps } from "../types";


const StyledFlex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    justify-content: ${({justify}) => justify || 'stretch'};
    align-items: ${({align}) => align || 'stretch'};
    margin: ${({ margin }) => margin || '0'};
    flex-wrap: ${({wrap}) => wrap || 'nowrap'};
    gap: ${({ gap }) => gap || '0'};
`


const Flex = ({ children, ...props }: FlexProps) => {
    return (
        <StyledFlex {...props}>{children}</StyledFlex>
    )
};

export default Flex;