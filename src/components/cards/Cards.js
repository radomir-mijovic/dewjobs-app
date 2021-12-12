import React from 'react';
import {CardsStyled} from "./CardsStyled";
import {useStyleContext} from "../../context/style_context";
import {DotStyled, H2Card} from "../globalStyle/GlobalStyle";
import {SmallLogoStyled} from "../logo/SmallLogoStyled";
import {Link} from "react-router-dom";
import logo from '../../assets/logos/blogr.svg'
import {motion} from "framer-motion";


const Cards = () => {
    const {isLight} = useStyleContext()

    return (
        <CardsStyled isLight={isLight}>
            <Link>
                <motion.div
                    whileTap={{scale: .97}}
                    whileHover={{scale: 1.01}}
                    className="card">
                    <SmallLogoStyled>
                        <img src={logo} alt=""/>
                    </SmallLogoStyled>
                    <div className="big-info">
                        <div className="info">
                            <H2Card>5h ago</H2Card>
                            <DotStyled/>
                            <H2Card>Full Time</H2Card>
                        </div>
                        <h1>Senior Software Engineer</h1>
                        <H2Card>Scoot</H2Card>
                        <div/>
                        <h3 className="location">United Kingdom</h3>
                    </div>
                </motion.div>
            </Link>
            <div className="card">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="big-info">
                    <div className="info">
                        <H2Card>5h ago</H2Card>
                        <DotStyled/>
                        <H2Card>Full Time</H2Card>
                    </div>
                    <h1>Senior Software Engineer</h1>
                    <H2Card>Scoot</H2Card>
                    <div/>
                    <h3 className="location">United Kingdom</h3>
                </div>
            </div>
            <div className="card">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="big-info">
                    <div className="info">
                        <H2Card>5h ago</H2Card>
                        <DotStyled/>
                        <H2Card>Full Time</H2Card>
                    </div>
                    <h1>Senior Software Engineer</h1>
                    <H2Card>Scoot</H2Card>
                    <div/>
                    <h3 className="location">United Kingdom</h3>
                </div>
            </div>
            <div className="card">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="big-info">
                    <div className="info">
                        <H2Card>5h ago</H2Card>
                        <DotStyled/>
                        <H2Card>Full Time</H2Card>
                    </div>
                    <h1>Senior Software Engineer</h1>
                    <H2Card>Scoot</H2Card>
                    <div/>
                    <h3 className="location">United Kingdom</h3>
                </div>
            </div>
        </CardsStyled>
    );
};

export default Cards;