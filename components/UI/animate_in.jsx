
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AnimateIn = (props) => {

    let el = useRef(null);

    useEffect(() => {
        gsap.from(el, {
            opacity: 0,
            ease: "Power1.easeOut",
            y: 80,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                once: true,
                start: 'top center',
            },
        });
    }, [])

    return (
        <div ref={(ref_el) => (el = ref_el)}>
            {props.children}
        </div>
    )
}

export default AnimateIn;

