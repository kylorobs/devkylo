import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
    width: 100%; 
    max-width: 1000px;
    margin: auto;
    height: auto;
    margin: 2rem 0;
    img {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
`

const Picture = ({ url, alt }) => (
    <ImageContainer>
        <picture>
            <source media="(max-width: 400px)" srcSet={url + "&w=400"} />
            <source media="(max-width: 900px)" srcSet={url + "&w=900"} />
            <source srcSet={url} />
            <img src={url} alt={alt} />
        </picture>
    </ImageContainer>
);

export default Picture;