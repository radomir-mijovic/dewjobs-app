import React from 'react';
import {MobileFilterStyled} from "./MobileFilterStyled";
import {useStyleContext} from "../../context/style_context";
import locationIcon from '../../assets/desktop/icon-location.svg'
import checkIcon from '../../assets/desktop/icon-check.svg'
import {ButtonLoadMore} from "../UI/ButtonsStyled";
import closeIcon from '../../assets/desktop/icon-close.svg'
import {useJobsContext} from "../../context/job_context";
import LocationAutocomplete from "../searchBar/LocationAutocomplete";

const MobileFilter = () => {
    const {
        searchLocation,
        searchJobs,
        locationHandler,
        fullTimeHandler,
        emptyFullTimeHandler
    } = useJobsContext()
    const {
        setIsModal,
        isLight,
        isAutocomplete,
        isChecked
    } = useStyleContext()

    const closeModalHandler = () => {
        emptyFullTimeHandler()
        setIsModal(false)
    }

    const searchHandler = (e) => {
        e.preventDefault()
        setIsModal(false)
        searchJobs()
    }

    return (
        <MobileFilterStyled isLight={isLight}>
            <img className='close-icon' onClick={closeModalHandler} src={closeIcon} alt=""/>
            <div className="search-box">
                <div className="location">
                    <img src={locationIcon} alt="location-icon"/>
                    <input
                        type="text"
                        value={searchLocation}
                        onChange={e => locationHandler(e)}
                        placeholder='Filter by location'/>
                    {isAutocomplete && <LocationAutocomplete/>}
                </div>
                <div className="full-time">
                    <div className="checkboxes">
                        {!isChecked ? <div className="checkbox empty" onClick={fullTimeHandler}/> :
                            <div className="checkbox full" onClick={emptyFullTimeHandler}>
                                <img src={checkIcon} alt="check-icon"/>
                            </div>
                        }
                        <h2>Full Time Only</h2>
                    </div>
                    <ButtonLoadMore
                        onClick={e => searchHandler(e)}
                        width={'100%'}>
                        Search
                    </ButtonLoadMore>
                </div>
            </div>
        </MobileFilterStyled>
    );
};

export default MobileFilter;