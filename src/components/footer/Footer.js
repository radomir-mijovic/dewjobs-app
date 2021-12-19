import React from 'react';
import {FooterStyled} from "./FooterStyled";
import {ButtonLoadMore} from "../UI/ButtonsStyled";
import {useStyleContext} from "../../context/style_context";
import {useJobsContext} from "../../context/job_context";
import {H2Card} from "../globalStyle/GlobalStyle";

const Footer = () => {
    const {isLight} = useStyleContext()
    const {jobDetail: {position, company}} = useJobsContext()

    return (
        <FooterStyled isLight={isLight}>
            <div className="job-info">
                <h1>{position}</h1>
                <H2Card>{company}.</H2Card>
            </div>
            <ButtonLoadMore width={'100%'}>
                Apply Now
            </ButtonLoadMore>
        </FooterStyled>
    );
};

export default Footer;