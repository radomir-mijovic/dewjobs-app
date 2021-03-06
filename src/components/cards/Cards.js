import React from 'react';
import {CardsStyled} from "./CardsStyled";
import {useStyleContext} from "../../context/style_context";
import {DotStyled, H2Card} from "../globalStyle/GlobalStyle";
import {SmallLogoStyled} from "../logo/SmallLogoStyled";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useJobsContext} from "../../context/job_context";
import NoJobsFound from "../noJobsFound/NoJobsFound";


const Cards = () => {
    const {isLight, setIsAutocomplete} = useStyleContext()
    const {filteringJobs, sliceEnd} = useJobsContext()
    const jobsForMapping = filteringJobs.slice(0, sliceEnd)

    if (filteringJobs.length === 0) {
        return <NoJobsFound/>
    }

    return (
        <CardsStyled isLight={isLight}>
            {jobsForMapping && jobsForMapping.map(job => {
                const {id} = job;

                return (
                    <Link to={`/job-detail/${id}`} key={job.id}>
                        <motion.div
                            onClick={() => setIsAutocomplete(false)}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            whileTap={{scale: .97}}
                            whileHover={{scale: 1.01}}
                            className="card">
                            <SmallLogoStyled logoBackgroudColor={job.logo_background_color}>
                                <img src={job.logo} alt=""/>
                            </SmallLogoStyled>
                            <div className="big-info">
                                <div className="info">
                                    <H2Card>{job.posted_at}</H2Card>
                                    <DotStyled/>
                                    <H2Card>{job.job_type}</H2Card>
                                </div>
                                <h1>{job.position}</h1>
                                <H2Card>{job.company}</H2Card>
                                <div/>
                                <h3 className="location">{job.location}</h3>
                            </div>
                        </motion.div>
                    </Link>
                )
            })}
        </CardsStyled>
    );
};

export default Cards;