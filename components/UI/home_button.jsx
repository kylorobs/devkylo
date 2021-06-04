import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HomeIcon from '../../assets/Home.svg';

const Circle = styled.div`
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 60px;
    height: 60px;
    border-radius: 8rem;
    background-color: ${props => props.theme.colors.primary};
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }

    svg {
        width: 60%;
    }

`


const HomeButton = () => (
    <Link href="/">
        <a>
            <Circle>
                <HomeIcon />
            </Circle>
        </a>
    </Link>
);

export default HomeButton