import React, {useState} from 'react';
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
        setIsFullTime,
        setSearchTitle,
        searchLocation,
        locationHandler
    } = useJobsContext()
    const {isLight, setIsAutocomplete, isAutocomplete} = useStyleContext()
    const [isCheck, setIsCheck] = useState(false)

    const fullTimeHandler = () => {
        setIsCheck(true)
        setIsFullTime('full')
    }

    const emptyFullTime = () => {
        setIsCheck(false)
        setIsFullTime('')
    }

    const searchHandler = (e) => {
        e.preventDefault()
        searchJobs()
    }

    if (isLoading) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <SearchBarStyled isLight={isLight}>
            <div className="search">
                <img className='search-icon' src={searchIcon} alt="Search icon"/>
                <input
                    type="text"
                    onChange={(e) => setSearchTitle(e.target.value)}
                    onClick={() => setIsAutocomplete(false)}
                    placeholder='Filter by title, companies, expertise...'/>
            </div>
            <div className="location">
                <img className='location-icon' src={locationIcon} alt="Location icon"/>
                <input
                    type="text"
                    value={searchLocation}
                    onChange={(e) => locationHandler(e)}
                    placeholder='Filter by location...'/>
                {isAutocomplete && <LocationAutocomplete/>}
            </div>
            <div className="full-time" onClick={() => setIsAutocomplete(false)}>
                {!isCheck ?
                    <div className='checkbox empty' onClick={fullTimeHandler}/> :
                    <div className="checkbox full" onClick={emptyFullTime}>
                        <img src={checkIcon} alt=""/>
                    </div>}
                <h2 className='full-time-only_h2'>Full Time Only</h2>
                <h2 className='full-time_h2'>Full Time</h2>
                <ButtonSearchStyled
                    onClick={e => searchHandler(e)}
                    width={'123px'}>
                    Search
                </ButtonSearchStyled>
            </div>
        </SearchBarStyled>
    );
};

export default SearchBar;