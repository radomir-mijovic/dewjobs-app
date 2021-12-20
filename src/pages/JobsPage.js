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

const JobsPage = () => {
    const {isModal} = useStyleContext()
    const {isError} = useJobsContext()

    if (isError) {
        return (
            <h1>Error</h1>
        )
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
                <Cards/>
                <ButtonFlex>
                    <ButtonLoadMore>
                        Load More
                    </ButtonLoadMore>
                </ButtonFlex>
            </ContainerStyled>
        </motion.div>
    );
};

export default JobsPage;