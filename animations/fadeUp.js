export const fadeUp = (el) => {
    const tl = gsap.timeline();
    tl.fromTo(el, {
        opacity: 0,
        x: -10,
        duration: 2
    });
    return tl;
}