import React from 'react';
import {SearchBarMobileStyled} from "./SearchBarMobileStyled";
import searchIcon from '../../assets/mobile/icon-search-white.svg'
import filterIcon from '../../assets/mobile/icon-filter.svg'
import {ButtonSearchStyled} from "../UI/ButtonsStyled";
import {useStyleContext} from "../../context/style_context";

const SearchBarMobile = () => {
    const {isLight} = useStyleContext()

    return (
        <SearchBarMobileStyled isLight={isLight}>
            <input type="text" placeholder='Filter by title...'/>
            <img src={filterIcon} alt=""/>
            <ButtonSearchStyled
                height={'4.8rem'}
                width={'4.8rem'}>
                <img className='search-icon' src={searchIcon} alt=""/>
            </ButtonSearchStyled>
        </SearchBarMobileStyled>
    );
}

export default SearchBarMobile;