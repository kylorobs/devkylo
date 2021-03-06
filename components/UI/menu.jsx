import styled from 'styled-components';
import Link from 'next/link';
import ProfileImage from './profile_image';
import HomeButton from './home_button';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.secondary};
  min-height: 100vh;
  text-align: center;
  padding: 2rem 4rem;
  padding-top: 10rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 25%;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 400;
  @media (max-width: 600px) {
    width: auto;
    padding: 2rem;
  }

  a {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 600px) {
      font-size: 2rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    margin-top:2rem;
    font-family: ${({ theme }) => theme.fonts.paragraph};
    font-size: 2rem;
    text-align: center;
    a {
      font-size: 2rem;
      display: block;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <HomeButton />
      <ProfileImage />
      <Link href="/create">
        <a>
          <span role="img" aria-label="Things built">&#127959;</span>
          Things built
        </a>
      </Link>
      <Link href="/solve">
        <a>
          <span role="img" aria-label="Problems solved">&#x2699;</span>
          Problems solved
        </a>
      </Link>
      <Link href="/coach">
        <a>
          <span role="img" aria-label="People coached">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
          People coached
        </a>
      </Link>
      <p>Follow me on Twitter - <a href="https://twitter.com/kylorobs">@kylorobs</a></p>
      <p>Email me at <a href="mailto:kylo@thegreatsync.com">kylo@thegreatsync.com</a></p>
    </StyledMenu>
  )
}
export default Menu;