import React from 'react';
import {NoJobsFoundStyled} from "./NoJobsFoundStyled";
import noJobFoundIcon from '../../assets/illustration-empty.svg'

const NoJobsFound = () => {
    return (
        <NoJobsFoundStyled>
            <img src={noJobFoundIcon} alt="no-jobs-pic"/>
        </NoJobsFoundStyled>
    );
};

export default NoJobsFound;