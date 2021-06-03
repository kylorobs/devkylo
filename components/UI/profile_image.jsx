import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-bottom: 3rem;   
`

const ProfileImage = () => (
    <Wrapper>
        <Image src="/myface.jpg" alt="Profile image of Kylo Robinson" width="800" height="620" layout="responsive" />
    </Wrapper>
)

export default ProfileImage;