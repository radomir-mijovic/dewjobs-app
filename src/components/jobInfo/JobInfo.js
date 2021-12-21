import React from 'react';
import {JobInfoStyled} from "./JobInfoStyled";
import {ButtonLoadMore} from "../UI/ButtonsStyled";
import {DotStyled, H2Card} from "../globalStyle/GlobalStyle";
import {useStyleContext} from "../../context/style_context";
import {useJobsContext} from "../../context/job_context";

const JobInfo = () => {
    const {isLight} = useStyleContext()
    const {jobDetail:
        {
            position,
            job_type,
            location,
            posted_at,
            description,
            requirements,
            requirements_items,
            role,
            role_items
        }
    } = useJobsContext()

    return (
        <JobInfoStyled isLight={isLight}>
            <div className="company-info">
                <div className="info">
                    <div className="small-info">
                        <H2Card>{posted_at}</H2Card>
                        <DotStyled/>
                        <H2Card>{job_type}</H2Card>
                    </div>
                    <h1>{position}</h1>
                    <h3>{location}</h3>
                </div>
                <ButtonLoadMore
                    width={'100%'}
                    marginTop={'5rem'}>
                    Apply Now
                </ButtonLoadMore>
            </div>
            <H2Card className='text'>
                {description}
            </H2Card >
            <h1 className='header-text'>Requirements</h1>
            <H2Card className='text'>
                {requirements}
            </H2Card>
            <ul>
                {requirements_items && requirements_items.map((item, index) => {
                    return (
                        <li key={index}><H2Card>{item.items}</H2Card></li>
                    )
                })}
            </ul>
            <h1 className='header-text'>What You Will Do</h1>
            <H2Card className='text'>
                {role}
            </H2Card>
            <ol>
                {role_items && role_items.map((item, index) => {
                    return (
                        <li key={index}><H2Card>{item.items}</H2Card></li>
                    )
                })}
            </ol>
        </JobInfoStyled>
    );
};

export default JobInfo;