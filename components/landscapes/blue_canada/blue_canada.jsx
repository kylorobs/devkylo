import React, { useEffect, useRef } from 'react';
// import gsap from "gsap";
import { fadeUp } from '../../../animations/fadeUp';
import Blue from '../../../assets/blue.svg';
import Image from 'next/image';
import { FullScreen, Layer, SVGBase} from '../../layouts/landscapes';



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
            <SVGBase bg="#979797">
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
