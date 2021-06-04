import React from 'react';
import styled from 'styled-components';
import FullPage from './fullpage';

const Bg = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: ${({ type }) => type === 'create' ? "url('../fullblue.jpg')" : type === 'solve' ? "url('../fullLake.jpg')" : "url('../fullLake.jpg')"};
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
    background-image: ${({ type }) => type === 'create' ? "url('../fullblue.jpg')" : type === 'solve' ? "url('../fullLake.jpg')" : "url('../fullLake.jpg')"};
    background-color: black;
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

const CanvasPage = (props) => {
    console.log('Canvas props type')
    console.log(props.type)
    return (
        <FullPage pagetitle={props.pagetitle} pagedesc={props.pagedesc}>
            <Bg {...props} >
                <Canvas {...props} >
                    <Type>I.{props.type.toUpperCase()}()</Type>
                    <h1>{props.pagetitle}</h1>
                    {props.children}
                </Canvas>
            </Bg>
        </FullPage>
    )
}

export default CanvasPage;