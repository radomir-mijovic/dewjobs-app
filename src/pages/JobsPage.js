import React from 'react';
import {ContainerStyled} from "../components/container/ContainerStyled";
import SearchBar from "../components/searchBar/SearchBar";
import SearchBarMobile from "../components/searchBar/SearchBarMobile";
import Cards from "../components/cards/Cards";
import {ButtonFlex, ButtonLoadMore} from "../components/UI/ButtonsStyled";
import {motion} from "framer-motion";
import MobileFilter from "../components/MobileFilter/MobileFilter";
import {useStyleContext} from "../context/style_context";
import {useJobsContext} from "../context/job_context";
import {Link} from "react-router-dom";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const JobsPage = () => {
    const {isModal} = useStyleContext()
    const {isError, isLoading, filteringJobs} = useJobsContext()

    if (isError) {
        return <Error/>
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .3}}>
            <ContainerStyled>
                <SearchBar/>
                <SearchBarMobile/>
                {isModal && <MobileFilter/>}
                {!isLoading ?
                    <>
                        <Cards/>
                        <ButtonFlex>
                            {filteringJobs.length === 0 ?
                                <h1>No Jobs Found, <Link to='/'>Back to all jobs page</Link></h1> :
                                <ButtonLoadMore>
                                    Load More
                                </ButtonLoadMore>}
                        </ButtonFlex>
                    </> :
                    <Loading/>
                }

            </ContainerStyled>
        </motion.div>
    );
};

export default JobsPage;