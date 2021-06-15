import React, { useEffect, useRef } from 'react';
// import gsap from "gsap";
import { fadeUp, slideUp, scaleIn, fadeIn, fadeInTo } from '../../../animations/fadeUp';
import Blue from '../../../assets/blue.svg';
import Image from 'next/image';
import { FullScreen, Layer, SVGBase, HiddenOnLoad} from '../../layouts/landscapes';
import gsap from 'gsap';



const BlueCanada = props => {

    let mountainsEl = useRef(null);
    let moonEl = useRef(null);
    let foregroundEl = useRef(null);
    let contentEl = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({delay: 1});
        tl.set(contentEl, {opacity: 0})
        tl.set(foregroundEl, {opacity: 0})
        tl.add(fadeInTo(foregroundEl));
        tl.add(scaleIn(foregroundEl),'-=1');
        tl.add(fadeIn(moonEl),'-=1');
        tl.add(slideUp(moonEl),'-=1');
        tl.add(fadeUp(mountainsEl, 2), '-=3');
        tl.add(fadeInTo(contentEl), '-=0.4');

    }, [])

    return (
        <FullScreen color="#86bbe6">
            <Layer width="auto" top="50%" left="50%" zIndex="100" center>
                <HiddenOnLoad ref={(el) => (contentEl = el)}>
                    {props.children}
                </HiddenOnLoad>
            </Layer>
            <SVGBase bg="#60d8a2">
                <Layer bottom="0" zIndex="-10"  ref={(el) => (mountainsEl = el)}>
                    <Image src="/mountains.png" alt="Vercel Logo" width="800" height="383" layout="responsive" />
                </Layer>
                <Layer zIndex="-20" top="60%" left="50%" center width="90%" ref={(el) => (moonEl = el)}>
                    <Image src="/moon.png" alt="Vercel Logo" width="977" height="982" layout="responsive" />
                </Layer>
                <HiddenOnLoad ref={(el) => (foregroundEl = el)}>
                    <Blue />
                </HiddenOnLoad>
            </SVGBase>
        </FullScreen>
    )
};

export default BlueCanada;
