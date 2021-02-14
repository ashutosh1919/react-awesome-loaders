import React from 'react'
import styled from '@xstyled/styled-components'

const StyledButton = styled.div`
    display: flex;
    background: ${props => props.background};
    padding: 10px;
    cursor: pointer;
    :hover {
        background: ${props => props.backgroundHover};
    }
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
    width: 190px;
`;

const StyledImg = styled.img`
    height: 25px;
    width: auto;
    margin-right: 10px;
`;

export const StyledParent = styled.div`
    display: flex;
    flexDirection: row;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const StyledHref = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    span {
        text-decoration: none;
    }
`;

const StyledSpan = styled.span`
    text-decoration: none;
    color: ${props => props.textColor};
`;

export const DonateButton = ({ iconUrl, text, background, backgroundHover, textColor, url, ...rest}) => {
    return (
        
            <StyledButton background={background} backgroundHover={backgroundHover}>
                <StyledHref href={url}>
                    <StyledImg src={iconUrl} /> 
                    <StyledSpan textColor={textColor}>{text}</StyledSpan>
                </StyledHref>
            </StyledButton>
    );
}