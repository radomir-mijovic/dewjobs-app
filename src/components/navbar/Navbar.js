import React, {useState} from 'react';
import {NavbarWrapper} from "./NavbarStyled";
import logo from '../../assets/desktop/logo.svg'
import sunImg from '../../assets/desktop/icon-sun.svg'
import moonImg from '../../assets/desktop/icon-moon.svg'
import {useStyleContext} from "../../context/style_context";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {setIsLight} = useStyleContext()

    const toggleHandler = () => {
        setToggle(prevState => !prevState)
        setIsLight(prevState => !prevState)
    }

    return (
        <NavbarWrapper toggle={toggle}>
            <Link to='/'>
                <img src={logo} alt="logo"/>
            </Link>
            <div className="switcher">
                <img src={sunImg} alt=""/>
                <div className="toggle">
                    <div onClick={toggleHandler} className="ball"/>
                </div>
                <img src={moonImg} alt=""/>
            </div>
        </NavbarWrapper>
    );
};

export default Navbar;