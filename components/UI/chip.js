
import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    display: block;
    background-color: black;
    color: white;
    padding: ${props => props.small? '1rem' : '1rem 1.5rem'};
    margin: 0.5em;
    text-align: center;

    @media (min-width: 600px){
        padding: 1rem 1.5rem;
    }

    & span {
        font-size: ${props => props.small? '1.2rem' : '2rem'};
        font-family: ${props => props.theme.fonts.primary}
        
        @media (min-width: 600px){
            font-size: ${props => props.small? '1.5rem' : '2rem'};;
        }
    }

`

const Chip = props => (
    <Block className="chip" {...props}><span>{props.children}</span></Block>
)

export default Chip;