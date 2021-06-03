import React, { useEffect, useRef } from 'react';
// import gsap from "gsap";
import { fadeUp } from '../../../animations/fadeUp';
import Bridge from '../../../assets/bridge.svg';
import Moon from '../../../assets/moon.svg';
import Image from 'next/image';
import { FullScreen, Layer, SVGBase} from '../../layouts/landscapes';
import styled from 'styled-components';


const Sky = styled.div`
    width: 100%;
    height: 100vh;
    background-color: blue;
`


const RicketyBridge = props => {

    let starsEl = useRef(null);
    let moonEl = useRef(null);
    let balloonEl = useRef(null);
    // let moonEl = useRef(null);

    useEffect(() => {
        // const tl = gsap.timeline();
        // tl.add(fadeUp(mountainsEl));
        // tl.add(fadeUp(fronttreesEl));
        // tl.add(fadeUp(backtreesEl));
        // tl.add(fadeUp(rocksEl));

    }, [fadeUp])

    return (
        <FullScreen>
            <Layer width="100%" top="50%" left="50%" w zIndex="300" center>
                {props.children}
            </Layer>
        
        <SVGBase bg="#9bb1ff">
            <Layer ref={(el) => (balloonEl = el)} width="3%" zIndex="200" left="50%" center top="40%">
                <Image src="/balloon.png" alt="Vercel Logo" width="77" height="117" layout="responsive" />
            </Layer>
            <Layer ref={(el) => (starsEl = el)} width="100%" zIndex="-10" left="50%" center top="40%">
                <Image src="/stars.png" alt="Vercel Logo" width="2692" height="1460" layout="responsive" />
            </Layer>
            <Layer ref={(el) => (moonEl = el)} width="70%" left="50%" top="50%" center zIndex='-10'>
                <Moon />
            </Layer>
            
            <Bridge/>
        </SVGBase>
        </FullScreen>
    )
};

export default RicketyBridge;
