import Chip from 'components/UI/chip';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/UI/footer';

const Bg = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url('./fullLake.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 8rem;
    padding-bottom: 4rem;
`

const Type = styled.div`
    font-size: 5rem;
    color: black;
    font-family: ${props => props.theme.fonts.primary};
    color: black;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
    background-image: url('./fullLake.jpg');

    @media (min-width: 600px){
        font-size: 8rem;
    }
`

const Canvas = styled.div`
    width: 90%;
    margin: auto;
    min-height: 100vh;
    background: white;
    padding: 2rem;
    padding-bottom: 12rem;
    box-shadow: 6px 5px 5px 2px rgb(0 0 0 / 45%);

    h1 {
        font-size: 5rem;
        text-align: center;
        margin: 4rem auto;  
        @media (min-width: 600px){
            font-size: 6rem;
            max-width: 800px;
            margin: 8rem auto 2rem auto;
        }
    }
`

const Text = styled.div`
    margin: 1rem;
    @media(min-width: 600px){
        margin: 4rem;
    }

    p {
        font-family: ${props => props.theme.fonts.paragraph};
        font-size: 2.2rem;
        margin: 2rem 0;
        line-height: 32px;
    }
`

const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0;
    overflow: hidden;

    @media (min-width: 600px){
        padding: 2rem;
    }
`

const Test = () => {
    return (
        <>
        <Bg>
            <Canvas>
                <Type>I.CREATE()</Type>
                <h1>2020 Varsity Landing Page</h1>
                <Flex>
                    <Chip>Javascript</Chip>
                    <Chip>CSS Grid</Chip>
                    <Chip>Firebase</Chip>
                    <Chip>Github</Chip>
                    <Chip>CSS Transitions</Chip>
                
                </Flex>
                <Text>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </Text>
            </Canvas>
        </Bg>
        <Footer></Footer>
        </>
    )
}

export default Test;