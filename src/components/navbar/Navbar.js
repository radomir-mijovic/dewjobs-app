import React, {useState} from 'react';
import {NavbarWrapper} from "./NavbarStyled";
import logo from '../../assets/desktop/logo.svg'
import sunImg from '../../assets/desktop/icon-sun.svg'
import moonImg from '../../assets/desktop/icon-moon.svg'
import {useStyleContext} from "../../context/style_context";
import {Link} from "react-router-dom";
import {useJobsContext} from "../../context/job_context";

const Navbar = () => {
    const {setIsLight, isLight} = useStyleContext()
    const {getAllJobs, clearValuesHandler} = useJobsContext()

    const backHomeHandler = () => {
        clearValuesHandler()
        getAllJobs()
    }

    return (
        <NavbarWrapper isLight={isLight}>
            <Link className='logo' to='/'>
                <img onClick={backHomeHandler} src={logo} alt="logo"/>
            </Link>
            <div className="switcher">
                <img src={sunImg} alt=""/>
                <div className="toggle">
                    <div onClick={() => setIsLight(prevState => !prevState)} className="ball"/>
                </div>
                <img src={moonImg} alt=""/>
            </div>
        </NavbarWrapper>
    );
};

export default Navbar;