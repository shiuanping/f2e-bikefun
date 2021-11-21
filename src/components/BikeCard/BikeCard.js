import React, {useEffect} from 'react';
//components
import {Card, CardTitle, CardLocation, Icon} from './style';
import Tag from '../Tag/Tag'
//module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
const BikeCard = (props) => {
    const {searchStatus, station, detail} = props;
    useEffect(() => {
    }, [detail, station]);
    return (
        <Card>
            <CardTitle>{searchStatus && station.StationName.Zh_tw}</CardTitle>
            <CardLocation>
                <Icon>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </Icon>
                <p>{searchStatus && station.StationAddress.Zh_tw}</p>
            </CardLocation>
            {(searchStatus && detail) ? 
            <>
            <Tag type={'service'} serviceStatus={detail.ServiceStatus} AvailableRentBikes={detail.AvailableRentBikes} availableReturn={detail.AvailableReturnBikes}></Tag>
            <Tag type={'rent'} serviceStatus={detail.ServiceStatus} AvailableRentBikes={detail.AvailableRentBikes} availableReturn={detail.AvailableReturnBikes}></Tag>
            </>
            : null} 
            
        </Card>
    )
}


export default BikeCard;
