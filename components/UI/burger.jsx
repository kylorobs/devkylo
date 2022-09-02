// Burger.styled.js
import styled from 'styled-components';


const StyledBurger = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${({ open }) => open ? '4rem' : '6rem'};;
  height: ${({ open}) => open ? '4rem' : '6rem'};;
  background: ${({ open, theme }) => open ? 'none' : theme.colors.pink};;
  border: none;
  cursor: pointer;
  padding: ${({ open }) => open ? '0' : '1.5rem 0'};
  z-index: 2000;
  border-radius: 8rem;
  transition: background 0.3s ease-in;
  &:hover {
    background: ${({ open, theme }) => open ? 'none' : theme.colors.secondary};;
  }
  &:focus {
    outline: none;
  }

  
  div {
    width: 4rem;
    height: 0.5rem;
    background: black;
    border-radius: 10px;
    border: 1px solid black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin: auto;
  
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
`;

const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }
  

export default Burger;