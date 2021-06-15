import React, { useEffect, useRef } from 'react';
// import gsap from "gsap";
import Lake from '../../../assets/yacht.svg';
import Mountains from '../../../assets/lakemountains.svg';
import Image from 'next/image';
import { FullScreen, Layer, SVGBase} from '../../layouts/landscapes';
import styled from 'styled-components';
import gsap from 'gsap';
import { fadeUp, scaleIn, fadeIn, slideRight } from '../../../animations/fadeUp';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Ocean = styled.div`
    width: 100%;
    height: 30rem;
    background-color: #bcd9cc;
`
const Sky = styled.div`
    width: 100%;
    height: 100vh;
    background-color: blue;
`


const MagicalLake = props => {

    let mountainsEl = useRef(null);
    let ripplesEl = useRef(null);
    let plantsEl = useRef(null);
    let yachtEl = useRef(null);
    let contentEl = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: plantsEl,
                start: 'top center',
              },
        });
        tl.add(scaleIn(plantsEl));
        tl.add(fadeIn(yachtEl), '-=0.4');
        tl.add(fadeUp(mountainsEl), '-=0.8');
        tl.add(slideRight(contentEl), '-=0.5');

    }, [fadeUp])

    return (
        <FullScreen color="#3b516e">

            <Layer width="100%" top="50%" left="50%" containscarousel  zIndex="300" center>
                <div ref={(el) => (contentEl = el)}>
                    {props.children}
                </div>
            </Layer>
        
        <SVGBase bg="#9bb1ff">
            <Layer width="100%" zIndex="-10" left="0%" top="0%">
                <Image src="/lakecloud.png" alt="Vercel Logo" width="800" height="383" layout="responsive" />
            </Layer>
            <Layer  ref={(el) => (yachtEl = el)} width="8%" zIndex="400" left="50%" center bottom="10%">
                <Image src="/floatyacht.png" alt="Vercel Logo" width="86" height="152" layout="responsive" />
            </Layer>
            <Layer ref={(el) => (mountainsEl = el)}  width="90%" zIndex="-10" left="50%" center bottom="23%">
                <Mountains />
            </Layer>
            <Layer width="30%" zIndex="200" left="60%" center bottom="0%" ref={(el) => (ripplesEl = el)}>
                <Image src="/ripples.png" alt="Vercel Logo" width="800" height="383" layout="responsive" />
            </Layer>
            <Layer width="100%" bottom="5%" zIndex="-10">
                <Ocean />
            </Layer>
            <div ref={(el) => (plantsEl = el)}>
                <Lake/>
            </div>

        </SVGBase>
        </FullScreen>
    )
};

export default MagicalLake;
