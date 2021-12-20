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
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const JobsPage = () => {
    const {isModal} = useStyleContext()
    const {
        isError,
        isLoading,
        filteringJobs,
        getAllJobs,
        clearValuesHandler,
        setSliceEnd
    } = useJobsContext()

    const sliceHandler = () => {
        setSliceEnd(prevState => prevState + 2)
    }

    const loadAllJobsHandler = () => {
        clearValuesHandler()
        getAllJobs()
    }

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
                                <>
                                    <h1>
                                        No Jobs Found
                                    </h1>
                                    <button onClick={loadAllJobsHandler}>
                                        Back to jobs list
                                    </button>
                                </> :
                                <ButtonLoadMore onClick={sliceHandler}>
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