
import React from 'react';
import styled from 'styled-components';


const Flex = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: ${props => props.right? 'flex-start' : 'flex-end'};
    align-items: ${props => props.right? 'flex-start' : 'flex-end'};
`

const StyledSection = styled.section`
    width: 100%;
    min-height: 20rem;
    padding: 2em;

    h2 {
        font-size: 12rem;
        margin: 8rem;
        text-align: ${props => props.right? 'right' : 'left'};
    }

    p {
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 5rem;
        width: 50%;
        text-align: ${props => props.right? 'left' : 'right'};
        float: ${props => props.right? 'left' : 'right'};;
        margin: 0 2em;
    }
`

const SectionHeading = props => {
    return (
        <StyledSection {...props}>
            <h2>{props.heading}</h2>
            <Flex {...props}>
                {props.children}
            </Flex>
        </StyledSection>
    )
}

export default SectionHeading;