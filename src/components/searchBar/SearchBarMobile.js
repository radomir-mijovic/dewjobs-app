import React from 'react';
import {SearchBarMobileStyled} from "./SearchBarMobileStyled";
import searchIcon from '../../assets/mobile/icon-search-white.svg'
import filterIcon from '../../assets/mobile/icon-filter.svg'
import {ButtonSearchStyled} from "../UI/ButtonsStyled";
import {useStyleContext} from "../../context/style_context";
import {useJobsContext} from "../../context/job_context";

const SearchBarMobile = () => {
    const {isLight, setIsModal} = useStyleContext()
    const {searchJobs,
        setSearchTitle,
        isLoading
    } = useJobsContext()

    const searchJobsHandler = (e) => {
        e.preventDefault()
        searchJobs()
    }

    return (
        <SearchBarMobileStyled isLight={isLight}>
            <input
                type="text"
                disabled={isLoading && true}
                onChange={(e) => setSearchTitle(e.target.value)}
                placeholder='Filter by title...'/>
            <img onClick={() => setIsModal(true)} src={filterIcon} alt=""/>
            <ButtonSearchStyled
                disabled={isLoading && true}
                onClick={(e) => searchJobsHandler(e)}
                height={'4.8rem'}
                width={'4.8rem'}>
                <img className='search-icon' src={searchIcon} alt=""/>
            </ButtonSearchStyled>
        </SearchBarMobileStyled>
    );
}

export default SearchBarMobile;