import React, { useState, useRef } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Burger from './burger';
import Menu from './menu'; 

const MenuBurger = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOutsideClick(node, () => setOpen(false));

    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen}  />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

export default MenuBurger;