import React from 'react';
import {ContainerStyled} from "../components/container/ContainerStyled";
import SearchBar from "../components/searchBar/SearchBar";
import SearchBarMobile from "../components/searchBar/SearchBarMobile";
import Cards from "../components/cards/Cards";
import {ButtonFlex, ButtonLoadMore} from "../components/UI/ButtonsStyled";
import {motion} from "framer-motion";

const JobsPage = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            <ContainerStyled>
                <SearchBar/>
                <SearchBarMobile/>
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