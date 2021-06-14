import gsap from 'gsap';

export const fadeIn = (el, delay = 0) => {
    const tl = gsap.timeline();
    tl.set(el, {opacity: 0})
    tl.from(el, {
        opacity: 0,
        duration: 1,
        delay
    });
    return tl;
}

export const scaleIn = (el, delay = 0) => {
    const tl = gsap.timeline();
    tl.from(el, {
        scale: 1.5,
        duration: 2,
        eas:"Power1.easeInOut",
        delay
    });
    return tl;
}

export const fadeUp = (el, delay = 0) => {
    // gsap.set(el, {opacity: 0})
    const tl = gsap.timeline();
    tl.from(el, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay
    });
    return tl;
}

export const float = (el, delay = 0) => {
    const tl = gsap.timeline();
    tl.from(el, {
        x: 100,
        y: 10,
        ease: "Power1.easeIn",
        duration: 10,
        yoyo: true,
        delay
    });
    return tl;
}


export const slideUp = (el, delay = 0) => {
    const tl = gsap.timeline();
    tl.from(el, {
        y: 250,
        duration: 3,
        ease: "Power1.easeInOut",
        delay
    });
    return tl;
}

export const slideRight = (el, delay = 0) => {
    const tl = gsap.timeline();
    tl.from(el, {
        x: '-100%',
        duration: 2,
        ease: "Power1.easeInOut",
        delay
    });
    return tl;
}

export const setFadeUp = (el) => {
    gsap.set(el, {opacity: 0, y: 40})
    const tl = gsap.timeline();
    tl.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
    });
    return tl;
}

export const rotateFadeUp = (el) => {
    const tl = gsap.timeline();
    tl.from(el, {
        opacity: 0,
        rotateY: 45,
        duration: 3,
    });
    return tl;
}