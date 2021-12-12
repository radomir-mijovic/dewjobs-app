import React, {useState} from 'react';
import {SearchBarStyled} from "./SearchBarStyled";
import {ButtonSearchStyled} from "../UI/ButtonsStyled";
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import {useStyleContext} from "../../context/style_context";
import checkIcon from '../../assets/desktop/icon-check.svg'

const SearchBar = () => {
    const {isLight} = useStyleContext()
    const [isCheck, setIsCheck] = useState(false)

    return (
        <SearchBarStyled isLight={isLight}>
            <div className="search">
                <img className='search-icon' src={searchIcon} alt="Search icon"/>
                <input type="text" placeholder='Filter by title, companies, expertise...'/>
            </div>
            <div className="location">
                <img className='location-icon' src={locationIcon} alt="Location icon"/>
                <input type="text" placeholder='Filter by location...'/>
            </div>
            <div className="full-time">
                {!isCheck ?
                    <div className='checkbox empty' onClick={() => setIsCheck(true)}/>:
                    <div className="checkbox full" onClick={() => setIsCheck(false)}>
                        <img src={checkIcon} alt=""/>
                    </div>}
                <h2 className='full-time-only_h2'>Full Time Only</h2>
                <h2 className='full-time_h2'>Full Time</h2>
                <ButtonSearchStyled width={'123px'}>
                    Search
                </ButtonSearchStyled>
            </div>
        </SearchBarStyled>
    );
};

export default SearchBar;