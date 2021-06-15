import styled from "styled-components";
import Link from 'next/link'

const StyledButton = styled.button `
    padding: 0.5rem 1rem;
    font-size: 14px;
    background: white;
    text-align: center;
    font-family: ${props => props.theme.fonts.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    &:hover {
         cursor: pointer;
         background: ${props => props.theme.colors.primary};
         color: black;
    }

    @media (min-width: 600px){
        padding: 1rem 2rem;
        font-size: 16px;
    }
`;

const ButtonLink = props => (
    
    <Link href={props.link}>
        <StyledButton {...props}>{props.children}</StyledButton>
    </Link>
);

export default ButtonLink;