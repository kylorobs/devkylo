import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import gsap from "gsap";
import { fadeUp } from '../../../animations/fadeUp';
import Blue from '../../../assets/blue.svg';
import Image from 'next/image';

const FullScreen = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: #979797;
    overflow: hidden;
`


const Layer = styled.div`
    position: absolute;
    max-height: 100%;
    width: ${props => props.width || '100%'};
    bottom: ${props => props.bottom || ''};
    top: ${props => props.top || ''};
    left: ${props => props.left || ''};
    right: ${props => props.right || ''};
    z-index: ${props => props.zIndex || ''};
    transform: ${props => !props.center ? '' : 'translate(-50%, -50%)'};
`

const SVGBase = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 10;
    background-color: #979797;
`


const BlueCanada = props => {

    let mountainsEl = useRef(null);
    let fronttreesEl = useRef(null);
    let backtreesEl = useRef(null);
    let moonEl = useRef(null);

    useEffect(() => {
        // const tl = gsap.timeline();
        // tl.add(fadeUp(mountainsEl));
        // tl.add(fadeUp(fronttreesEl));
        // tl.add(fadeUp(backtreesEl));
        // tl.add(fadeUp(rocksEl));

    }, [fadeUp])

    return (
        <FullScreen>
            <Layer width="auto" top="50%" left="50%" w zIndex="100" center>
                {props.children}
            </Layer>
            <SVGBase>
                <Layer bottom="0" zIndex="-10"  ref={(el) => (mountainsEl = el)}>
                    <Image src="/mountains.png" alt="Vercel Logo" width="800" height="383" layout="responsive" />
                </Layer>
                <Layer width="60%" bottom="24%" right="25%" ref={(el) => (backtreesEl = el)}>
                    <Image src="/backtrees.png" alt="Vercel Logo" width="2048" height="430" layout="responsive" />
                </Layer>
                <Layer zIndex="-20" top="60%" left="50%" center width="90%" ref={(el) => (moonEl = el)}>
                    <Image src="/moon.png" alt="Vercel Logo" width="977" height="982" layout="responsive" />
                </Layer>
                <Layer width="30%" zIndex="20" right="10%" bottom="25%" ref={(el) => (fronttreesEl = el)}>
                    <Image src="/frontrees.png" alt="Vercel Logo" width="800" height="383" layout="responsive" />
                </Layer>
                <Blue />
            </SVGBase>
        </FullScreen>
    )
};

export default BlueCanada;
