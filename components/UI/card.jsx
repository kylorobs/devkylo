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
    margin: 1.5rem auto;
    box-shadow: 6px 5px 5px 2px rgb(0 0 0 / 45%);
    // background: #ffffff82;
    background: #ffffffcf;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    padding: 2rem;
    color: black;
    text-decoration: none;
    overflow: hidden;

    @media (min-width: 600px){
        height: 80%;
        width: 70%;
        max-width: 30rem;
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
const ProbSol_Heading = styled.span`
    display: block;
    font-family: ${props => props.theme.fonts.primary}
    font-size: 3rem;
    text-align: center;
    padding: 0 2rem;
    color: black;
    text-decoration: none;
`
const ProbSol_Text = styled.p`
    display: block;
    font-family: ${props => props.theme.fonts.paragraph};
    font-size: 1.7rem;
    text-align: center;
    padding: 0 2rem;
    color: black;
    text-decoration: none;
`


const Desc = styled.p`
    font-family: ${props => props.theme.fonts.paragraph};
    font-size: 1.7rem;
    text-align: center;
    margin: 2em;
    color: black;
    text-decoration: none;
`

const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0;
    // background: #ffffffbf;
    overflow: hidden;

    @media (min-width: 600px){
        padding: 2rem;
    }
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
        chips = props.chips.map((chip, i)=> {
            if (i >= 6) return;
            else return <Chip small>{chip}</Chip>
        })
    }

    if (props.solution){
        return (
            <Link href={props.link || '/'}>
                <ALink>
                    <Paper>
                        <ProbSol_Heading>Problem</ProbSol_Heading>
                        <ProbSol_Text>{props.problem}</ProbSol_Text>
                        <ProbSol_Heading>Solution</ProbSol_Heading>
                        <ProbSol_Text>{props.solution}</ProbSol_Text>
                        <Flex>
                            {chips}
                        </Flex>
                    </Paper>
                </ALink>
            </Link>
        )
    }

    else return (
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