import React, { useEffect, useRef } from 'react';
// import gsap from "gsap";
import { fadeUp, slideUp, rotateFadeUp } from '../../../animations/fadeUp';
import Blue from '../../../assets/blue.svg';
import Image from 'next/image';
import { FullScreen, Layer, SVGBase} from '../../layouts/landscapes';
import gsap from 'gsap';


const BlueCanada = props => {

    let mountainsEl = useRef(null);
    let fronttreesEl = useRef(null);
    let moonEl = useRef(null);
    let contentEl = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.add(slideUp(moonEl),'1');
        tl.add(rotateFadeUp(contentEl), '-=0.8');
        tl.add(fadeUp(mountainsEl), '-=3');

    }, [])

    return (
        <FullScreen>
            <Layer width="auto" top="50%" left="50%" zIndex="100" center>
                <div ref={(el) => (contentEl = el)}>
                    {props.children}
                </div>
            </Layer>
            <SVGBase bg="#60d8a2">
                <Layer bottom="0" zIndex="-10"  ref={(el) => (mountainsEl = el)}>
                    <Image src="/mountains.png" alt="Vercel Logo" width="800" height="383" layout="responsive" />
                </Layer>
                <Layer zIndex="-20" top="60%" left="50%" center width="90%" ref={(el) => (moonEl = el)}>
                    <Image src="/moon.png" alt="Vercel Logo" width="977" height="982" layout="responsive" />
                </Layer>
                <Blue />
            </SVGBase>
        </FullScreen>
    )
};

export default BlueCanada;
