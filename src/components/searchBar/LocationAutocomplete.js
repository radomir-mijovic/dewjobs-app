import React from 'react';
import {useJobsContext} from "../../context/job_context";
import {LocationAutocompleteStyled} from "./LocationAutocompleteStyled";
import {useStyleContext} from "../../context/style_context";

const LocationAutocomplete = () => {
    const {jobs, searchLocation, setSearchLocation} = useJobsContext()
    const {setIsAutocomplete} = useStyleContext()

    const locations = []
    for (const index in jobs) {
        locations.push(jobs[index].location)
    }

    const uniqueLocations = [...new Set(locations)]

    const locationHandler = (item) => {
        setSearchLocation(item)
        setIsAutocomplete(false)
    }

    return (
        <LocationAutocompleteStyled>
            {uniqueLocations.map((item, index) => {
                if (item.toLowerCase().startsWith(searchLocation.toLowerCase())) {
                    return (
                        <h2 onClick={() => locationHandler(item)} key={index}>
                            {item}
                        </h2>
                    )
                }
            })}
        </LocationAutocompleteStyled>
    );
};

export default LocationAutocomplete;