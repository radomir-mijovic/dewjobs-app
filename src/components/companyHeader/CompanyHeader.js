import React from 'react';
import {CompanyHeaderStyled} from "./CompanyHeaderStyled";
import {H2Card} from "../globalStyle/GlobalStyle";
import {ButtonCompanySiteStyled} from "../UI/ButtonsStyled";
import {useStyleContext} from "../../context/style_context";
import {SmallLogoStyled} from "../logo/SmallLogoStyled";
import {useJobsContext} from "../../context/job_context";

const CompanyHeader = () => {
    const {isLight} = useStyleContext()
    const {
        jobDetail: {
            company,
            website,
            logo,
            logo_background_color
        }
    } = useJobsContext()

    return (
        <CompanyHeaderStyled
            logoBackground={logo_background_color}
            isLight={isLight}>
            <div className="logo-big">
                <img src={logo} alt=""/>
            </div>
            <SmallLogoStyled className='small-logo'>
                <img src={logo} alt=""/>
            </SmallLogoStyled>
            <div className="info">
                <div className='company-info'>
                    <h1>{company}</h1>
                    <H2Card>{website}</H2Card>
                </div>
                <ButtonCompanySiteStyled isLight={isLight}>
                    Company Site
                </ButtonCompanySiteStyled>
            </div>
        </CompanyHeaderStyled>
    );
};

export default CompanyHeader;