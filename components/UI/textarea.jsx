import styled from 'styled-components';

export const TextArea = styled.div`
    max-width: 1100px;
    margin: 1rem atuo;
    padding: 2rem;
    @media(min-width: 600px){
        margin: 4rem auto;
    }

    h2 {
        margin-top: 4rem;
    }

    p {
        font-family: ${props => props.theme.fonts.paragraph};
        font-size: 2.2rem;
        margin: 2rem auto;
        line-height: 32px;
    }
`

export default TextArea;