import React, { useEffect, useRef } from 'react';
import Bridge from '../../../assets/bridge.svg';
import Moon from '../../../assets/moon.svg';
import Image from 'next/image';
import gsap from 'gsap';
import { fadeUp, scaleIn, float, slideRight } from '../../../animations/fadeUp';
import { FullScreen, Layer, SVGBase} from '../../layouts/landscapes';
import styled from 'styled-components';


const Sky = styled.div`
    width: 100%;
    height: 100vh;
    background-color: blue;
`


const RicketyBridge = props => {

    let contentEl = useRef(null);
    let moonEl = useRef(null);
    let balloonEl = useRef(null);
    let rocksEl = useRef(null);

    useEffect(() => {
         const tl = gsap.timeline();
        tl.add(scaleIn(rocksEl));
        tl.add(fadeUp(moonEl), '-=0.5');
        tl.add(float(balloonEl), '-=2');
        tl.add(slideRight(contentEl), '-=9');

    }, [])

    return (
        <FullScreen>
            <Layer width="100%" top="50%" left="50%" zIndex="300" center>
                <div ref={(el) => (contentEl = el)} >
                    {props.children}
                </div>
            </Layer>
        
        <SVGBase bg="#9bb1ff">
            <Layer ref={(el) => (balloonEl = el)} width="3%" zIndex="200" left="50%" center top="30%">
                <Image src="/balloon.png" alt="Vercel Logo" width="77" height="117" layout="responsive" />
            </Layer>
            <Layer width="100%" zIndex="-10" left="50%" center top="40%">
                <Image src="/stars.png" alt="Vercel Logo" width="2692" height="1460" layout="responsive" />
            </Layer>
            <Layer ref={(el) => (moonEl = el)} width="70%" left="50%" top="50%" center zIndex='-10'>
                <Moon />
            </Layer>

            <div ref={(el) => (rocksEl = el)}>
                <Bridge/>
            </div>
        </SVGBase>
        </FullScreen>
    )
};

export default RicketyBridge;
