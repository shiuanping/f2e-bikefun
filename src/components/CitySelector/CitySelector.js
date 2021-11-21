import React from 'react';
import {COLOR} from '../../constants/variables'
//data
import {BikeStationCity} from '../../data/data'

const CitySelector = (props) => {
    const {setTmpCity} = props;
    let cityList = BikeStationCity.map((item, index) => <option value={item.value} key={index}>{item.name}</option>)
    const handleChange = (e) => {
        setTmpCity(e.target.value);
    }
    return (
        <select style={{...selector}} onChange={handleChange}>
            {cityList}
        </select>
    )
}

const selector = {
    width: `48%`,
    color: COLOR.primary.primary,
    padding: `0.5rem 1rem`,
    border: `1px solid ${COLOR.primary.primary}`,
    borderRadius: `0.25rem`,
    cursor: `pointer`
}

export default CitySelector