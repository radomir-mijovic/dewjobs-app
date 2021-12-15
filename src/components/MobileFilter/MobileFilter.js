import React, {useState} from 'react';
import {MobileFilterStyled} from "./MobileFilterStyled";
import {useStyleContext} from "../../context/style_context";
import locationIcon from '../../assets/desktop/icon-location.svg'
import checkIcon from '../../assets/desktop/icon-check.svg'
import {ButtonLoadMore} from "../UI/ButtonsStyled";
import closeIcon from '../../assets/desktop/icon-close.svg'

const MobileFilter = () => {
    const {setIsModal, isLight} = useStyleContext()
    const [isCheck, setIsCheck] = useState(false)

    return (
        <MobileFilterStyled isLight={isLight}>
            <img className='close-icon' onClick={() => setIsModal(false)} src={closeIcon} alt=""/>
            <div className="search-box">
                <div className="location">
                    <img src={locationIcon} alt="location-icon"/>
                    <input type="text" placeholder='Filter by location...'/>
                </div>
                <div className="full-time">
                    <div className="checkboxes">
                        {!isCheck ? <div className="checkbox empty" onClick={() => setIsCheck(true)}/> :
                            <div className="checkbox full" onClick={() => setIsCheck(false)}>
                                <img src={checkIcon} alt="check-icon"/>
                            </div>
                        }
                        <h2>Full Time Only</h2>
                    </div>
                    <ButtonLoadMore
                        onClick={() => setIsModal(false)}
                        width={'100%'}>
                        Search
                    </ButtonLoadMore>
                </div>
            </div>
        </MobileFilterStyled>
    );
};

export default MobileFilter;