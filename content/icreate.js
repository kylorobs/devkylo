
import styled from 'styled-components';
import SectionHeading from '../components/UI/sectionHeading';
import Chip from '../components/UI/chip';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { theme } from '../theme/skin';


const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 6em auto;

    @media(min-width: 1000px){
        width: 60%
    }
`

const iCreate = () => {

    let chipsEl = useRef(null);

    useEffect(() => {

        const chips = chipsEl.querySelectorAll('.chip');
        gsap.to(chips, {
            background: theme.colors.primary,
            color: 'black',
            duration: 1,
            repeat: -1,
            stagger : {
                each: 1.5,
                yoyo: true,
                repeat: 1,
            }
        })
    }, [])

    return (
        <SectionHeading heading="BUILD">
           
                <p>I have been buiding javascript applications for many years. I am a team-worker, problem-solver and a leader. I know how to get the job done.</p>
                <Flex ref={(el) => (chipsEl = el)}>
                    <Chip>Javascript</Chip>
                    <Chip> React Js</Chip>
                    <Chip> Typescript </Chip>
                    <Chip> Redux </Chip>
                    <Chip> Node Js </Chip>
                    <Chip> Express Js </Chip>
                    <Chip> SQL </Chip>
                    <Chip> Firebase </Chip>
                    <Chip> Web Components </Chip>
                    <Chip> Git </Chip>
                    <Chip> Gatsby Js </Chip>
                    <Chip> Next Js </Chip>
                    <Chip> Jest </Chip>
                    <Chip> Cypress </Chip>
                    <Chip> Jira </Chip>
                </Flex>
    
        </SectionHeading>
    )
}

export default iCreate;