import React, { useEffect, useRef } from 'react';
// import gsap from "gsap";
import { fadeUp } from '../../../animations/fadeUp';
import Lake from '../../../assets/yacht.svg';
import Image from 'next/image';
import { FullScreen, Layer, SVGBase} from '../../layouts/landscapes';
import styled from 'styled-components';


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
    // let backtreesEl = useRef(null);
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
            <Layer width="auto" top="50%" left="50%" w zIndex="100" center>
                {props.children}
            </Layer>
          
            
            {/* <Image src="/lake.png" alt="Vercel Logo" width="721" height="505" layout="responsive" ></Image> */}
        
        <SVGBase bg="#9bb1ff">
            <Layer width="100%" zIndex="-10" left="0%" top="0%" ref={(el) => (mountainsEl = el)}>
                <Image src="/lakecloud.png" alt="Vercel Logo" width="800" height="383" layout="responsive" />
            </Layer>
            <Layer width="8%" zIndex="400" left="50%" center bottom="10%">
                <Image src="/floatyacht.png" alt="Vercel Logo" width="86" height="152" layout="responsive" />
            </Layer>
            <Layer width="70%" zIndex="-10" left="50%" center bottom="26%">
                <Image src="/lakemountains.png" alt="Vercel Logo" width="721" height="87" layout="responsive" />
            </Layer>
            <Layer width="30%" zIndex="200" left="60%" center bottom="0%" ref={(el) => (ripplesEl = el)}>
                <Image src="/ripples.png" alt="Vercel Logo" width="800" height="383" layout="responsive" />
            </Layer>
            <Layer width="100%" bottom="5%" zIndex="-10">
                <Ocean />
            </Layer>
            <Lake/>
        </SVGBase>
        </FullScreen>
    )
};

export default MagicalLake;
