import React from 'react';
import {CompanyHeaderStyled} from "./CompanyHeaderStyled";
import logo from '../../assets/logos/scoot.svg'
import {H2Card} from "../globalStyle/GlobalStyle";
import {ButtonCompanySiteStyled} from "../UI/ButtonsStyled";
import {useStyleContext} from "../../context/style_context";
import {SmallLogoStyled} from "../logo/SmallLogoStyled";

const CompanyHeader = () => {
    const {isLight} = useStyleContext()

    return (
        <CompanyHeaderStyled isLight={isLight}>
            <div className="logo-big">
                <img src={logo} alt=""/>
            </div>
            <SmallLogoStyled className='small-logo'>
                <img src={logo} alt=""/>
            </SmallLogoStyled>
            <div className="info">
                <div className='company-info'>
                    <h1>Scoot</h1>
                    <H2Card>scoot.com</H2Card>
                </div>
                <ButtonCompanySiteStyled isLight={isLight}>
                    Company Site
                </ButtonCompanySiteStyled>
            </div>
        </CompanyHeaderStyled>
    );
};

export default CompanyHeader;