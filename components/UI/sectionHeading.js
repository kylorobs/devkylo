
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
    padding: 0em;

    @media (min-width: 600px){
        padding: 2em;
    }

    h2 {
        font-size: 5rem;
        margin: 6rem 0;
        padding: 0;
        text-align: center;

        @media (min-width: 340px){
            font-size: 7rem;
            margin: 8rem 0;
        }

        @media (min-width: 410px){
            font-size: 7.5rem;
            margin: 8rem 0;
        }

        @media (min-width: 600px){
            font-size: 10rem;
            margin: 6rem;
            text-align: ${props => props.right? 'right' : 'left'};
        }

        @media (min-width: 1000px){
            font-size: 12rem;
            margin: 8rem;
            text-align: ${props => props.right? 'right' : 'left'};
        }
    }

    p {
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 3.5rem;
        width: 70%;
        text-align: ${props => props.right? 'left' : 'right'};
        margin: 0 1em 1em 1em;

        @media (min-width: 480px){
            font-size: 4rem;
            width: 60%;
        }
        
        @media (min-width: 600px){
            font-size: 5rem;
            width: 50%;
            margin: 0 2em 1em 2em;
        }
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