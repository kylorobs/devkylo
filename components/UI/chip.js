
import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    display: block;
    background-color: black;
    color: white;
    padding: 1rem 1.5rem;
    margin: 0.5em;
    text-align: center;

    & span {
        font-size: 2rem;
        font-family: ${props => props.theme.fonts.primary}
    }

`

const Chip = props => (
    <Block><span>{props.children}</span></Block>
)

export default Chip;