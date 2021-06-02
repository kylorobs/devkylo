import styled from 'styled-components';

export const FullScreen = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: blue;
`


export const Layer = styled.div`
    position: absolute;
    max-height: 100%;
    width: ${props => props.width || '100%'};
    bottom: ${props => props.bottom || ''};
    top: ${props => props.top || ''};
    left: ${props => props.left || ''};
    right: ${props => props.right || ''};
    z-index: ${props => props.zIndex || ''};
    transform: ${props => !props.center ? '' : 'translate(-50%, -50%)'};
`

export const SVGBase = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 10;
    background-color: ${props => props.bg};
`
