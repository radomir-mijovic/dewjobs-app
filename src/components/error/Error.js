import React from 'react';
import {ErrorStyled} from "./ErrorStyled";
import errorImg from '../../assets/illustration-empty.svg'
import {useStyleContext} from "../../context/style_context";

const Error = () => {
    const {isLight} = useStyleContext()

    return (
        <ErrorStyled isLight={isLight}>
            <img src={errorImg} alt="error-img"/>
            <h1>Something went wrong</h1>
        </ErrorStyled>
    );
};

export default Error;