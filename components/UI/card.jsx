import React from 'react';
import styled from 'styled-components';
import TechList from '../../content/techlist';
import Link from 'next/link';

const Paper = styled.div`
    height: 35rem;
    width: auto;
    min-width: 20rem;
    margin: 1.5rem auto;
    box-shadow: 6px 5px 5px 2px rgb(0 0 0 / 45%);
    background: #ffffffcf;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    padding: 2rem;
    color: black;
    text-decoration: none;
    overflow: hidden;
    transition: box-shadow 0.3s ease-in;

    &:hover {
        box-shadow: 6px 5px 5px 2px rgb(112 255 191);
    }

    @media (min-width: 600px){
        height: 80%;
        width: 90%;
        max-width: 30rem;
        max-height: 60rem;
        min-height: 35rem;

    }
`

const PaperText = styled.div`

    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;

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


const ALink = styled.a`
    color: black;
    text-decoration: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
`



const Card = props => {

    if (props.solution){
        return (
            <Link href={props.link || '/'} as={`/${props.link}` || '/'}>
                <ALink>
                    <Paper>
                        <PaperText>
                            <ProbSol_Heading>Problem</ProbSol_Heading>
                            <ProbSol_Text>{props.problem}</ProbSol_Text>
                            <ProbSol_Heading>Solution</ProbSol_Heading>
                            <ProbSol_Text>{props.solution}</ProbSol_Text>
                        </PaperText>
                            <TechList limit={4} small list={props.chips} />
                    </Paper>
                </ALink>
            </Link>
        )
    }

    else return (
        <Link href={props.link || '/'} as={`/${props.link}` || '/'}>
            <ALink>
                <Paper>
                    <PaperText>
                        <Title>{props.title}</Title>
                        <Desc>{props.desc}</Desc>
                    </PaperText>
                    <TechList small limit={5} list={props.chips} />
                </Paper>
            </ALink>
        </Link>
    )   
}

export default Card;