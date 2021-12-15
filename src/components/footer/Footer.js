import React from 'react';
import {FooterStyled} from "./FooterStyled";
import {ButtonLoadMore} from "../UI/ButtonsStyled";
import {useStyleContext} from "../../context/style_context";

const Footer = () => {
    const {isLight} = useStyleContext()

    return (
        <FooterStyled isLight={isLight}>
            <div className="job-info">
                <h1>Senior Software Developer</h1>
                <h2>So Digital Inc.</h2>
            </div>
            <ButtonLoadMore width={'100%'}>
                Apply Now
            </ButtonLoadMore>
        </FooterStyled>
    );
};

export default Footer;