import Chip from 'components/UI/chip';
import React from 'react';
import styled from 'styled-components';


const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0;
    background: #70ffbf;
    overflow: hidden;

    @media (min-width: 600px){
        padding: 2rem;
    }
`

const TechList = ({ list, limit, small }) => {

    let chips = null;
    if (list && list.length > 0){
        chips = list.map((chip, i)=> {
            if (limit && i >= +limit) return
            else return <Chip key={i+'chip'} small={small}>{chip}</Chip>
        })
    }
    return (
        <Flex>
            {chips}
        </Flex>
    )
}

export default TechList;