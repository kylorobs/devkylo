
import React from 'react';
import styled from 'styled-components';
import Card from '../components/UI/card';


const Flex = styled.div`
    display: flex;
    justify-content: center;
`

const PlaceHolder = () => (
    <Flex>
        <Card 
            title="New Home Page Design"
            desc="A new improved page for KCLSU"
            chips={['Node Js', 'Javascript', 'React', 'Firebase']}
        ></Card>
        <Card 
            title="Advice Pro Integration"
            desc="Integrating the Adice pro API"
            chips={['Node Js', 'Javascript', 'React', 'Firebase']}
        ></Card>
        <Card 
            title="Building a Component Library"
            desc="Designing a cusatom library"
            chips={['Node Js', 'Javascript', 'React', 'Firebase']}
        ></Card>
    </Flex>
)

export default PlaceHolder;