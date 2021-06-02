
import styled from 'styled-components';
import SectionHeading from '../components/UI/sectionHeading';
import Chip from '../components/UI/chip';

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

const iCreate = props => (
    <SectionHeading heading="I.CREATE()">
        <p>I have been buiding javascript applications for many years. I am a creator, a team-worker and a leader. I know how to get the job done.</p>
        <Flex>
            <Chip>Javascript </Chip>
            <Chip> React Js</Chip>
            <Chip> Node Js </Chip>
            <Chip> Typescript </Chip>
            <Chip> Express Js </Chip>
            <Chip> Firebase </Chip>
            <Chip> Redux </Chip>
            <Chip> SQL </Chip>
            <Chip> Web Components </Chip>
            <Chip> SCSS </Chip>
            <Chip> Gatsby Js </Chip>
            <Chip> Next Js </Chip>
            <Chip> Mocha </Chip>
            <Chip> Jasmine </Chip>
        </Flex>
    </SectionHeading>
)

export default iCreate;