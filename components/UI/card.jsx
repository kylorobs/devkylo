import React from 'react';
import styled from 'styled-components';
import Chip from './chip';
import Link from 'next/link';

const Paper = styled.div`
    height: 60%;
    min-height: 35rem;
    max-height: 35rem;
    width: auto;
    min-width: 20rem;
    margin: 1.5rem;
    box-shadow: 6px 5px 5px 2px rgb(0 0 0 / 15%);
    background: #ffffff82;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    padding: 1rem;
    color: black;
    text-decoration: none;


    @media (min-width: 600px){
        height: 80%;
        width: 30rem;
        max-height: 60rem;
        min-height: 35rem;

    }
`

const Title = styled.span`
    display: block;
    font-family: ${props => props.theme.fonts.primary}
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: black;
    text-decoration: none;
`

const Desc = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 22px;
    margin: 2em;
    color: black;
    text-decoration: none;
`

const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
`

const ALink = styled.a`
    color: black;
    text-decoration: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
`



const Card = props => {

    let chips = null;
    if (props.chips){
        chips = props.chips.map(chip => (
            <Chip small>{chip}</Chip>
        ))
    }

    return (
        <Link href={props.link || '/'}>
            <ALink>
                <Paper>
                    <Title>{props.title}</Title>
                    <Desc>{props.desc}</Desc>
                    <Flex>
                        {chips}
                    </Flex>
                </Paper>
            </ALink>
        </Link>
    )   
}

export default Card;