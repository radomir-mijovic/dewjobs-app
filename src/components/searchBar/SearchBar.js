import React from 'react';
import {SearchBarStyled} from "./SearchBarStyled";
import {ButtonSearchStyled} from "../UI/ButtonsStyled";
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import {useStyleContext} from "../../context/style_context";
import checkIcon from '../../assets/desktop/icon-check.svg'
import {useJobsContext} from "../../context/job_context";
import LocationAutocomplete from "./LocationAutocomplete";

const SearchBar = () => {
    const {
        searchJobs,
        isLoading,
        setSearchTitle,
        searchLocation,
        locationHandler,
        fullTimeHandler,
        emptyFullTimeHandler
    } = useJobsContext()
    const {
        isLight,
        setIsAutocomplete,
        isAutocomplete,
        isChecked
    } = useStyleContext()

    const searchHandler = (e) => {
        e.preventDefault()
        searchJobs()
    }

    return (
        <SearchBarStyled isLight={isLight}>
            <div className="search">
                <img className='search-icon' src={searchIcon} alt="Search icon"/>
                <input
                    type="text"
                    disabled={isLoading && true}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    onClick={() => setIsAutocomplete(false)}
                    placeholder='Filter by title, companies, expertise...'/>
            </div>
            <div className="location">
                <img className='location-icon' src={locationIcon} alt="Location icon"/>
                <input
                    type="text"
                    disabled={isLoading && true}
                    value={searchLocation}
                    onChange={(e) => locationHandler(e)}
                    placeholder='Filter by location...'/>
                {isAutocomplete && <LocationAutocomplete/>}
            </div>
            <div className="full-time" onClick={() => setIsAutocomplete(false)}>
                {!isChecked ?
                    <div className='checkbox empty' onClick={fullTimeHandler}/> :
                    <div className="checkbox full" onClick={emptyFullTimeHandler}>
                        <img src={checkIcon} alt=""/>
                    </div>}
                <h2 className='full-time-only_h2'>Full Time Only</h2>
                <h2 className='full-time_h2'>Full Time</h2>
                <ButtonSearchStyled
                    disabled={isLoading && true}
                    onClick={e => searchHandler(e)}
                    width={'123px'}>
                    Search
                </ButtonSearchStyled>
            </div>
        </SearchBarStyled>
    );
};

export default SearchBar;