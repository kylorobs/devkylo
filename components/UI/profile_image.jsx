import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
    width: 100%;
    max-width: 200px;
    height: auto;
    overflow: hidden;
    margin: 4rem auto 2rem auto; 
    filter: saturate(0);
    animation-name: fadeIn;
    animation-delay: 1s;
    animation-duration: 1s;
    
    @media(min-width: 600px){
        width: 100%;
        max-width: 250px;
        margin: 0 auto 3rem auto; 
    }

    @keyframes fadeIn {
        from {filter: saturate(0);}
        to {filter: saturate(1);}
      }
`

const ProfileImage = () => (
    <Wrapper>
        <Image src="/myface.jpg" alt="Profile image of Kylo Robinson" width="800" height="620" layout="responsive" />
    </Wrapper>
)

export default ProfileImage;