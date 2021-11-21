import React from 'react';
//components
import {TagWrapper} from './style';
import { COLOR } from '../../constants/variables';
const Tag = (props) => {
    const {type, serviceStatus, availableRentBikes, availableReturn} = props;
    const displayAvailableRent = () => {
        if (availableRentBikes > 0){
            if (availableReturn === 0){
                return '車位已滿'
            }
            return '尚有車位'
        }
        return '已無單車'
    }
    const displayServiceStatus = (serviceStatus) => {
        switch (serviceStatus) {
            case 0:
                return '停止營運'
            case 2:
                return '暫停營運'
            default:
                return '正常營運'
        }
    }
    const tagType = (type) => {
        if (type === 'service') {
            return displayServiceStatus(serviceStatus)
        }
        return displayAvailableRent(availableRentBikes)   
    }
    const tagColor = (keyText) => {
        switch (keyText) {
            case '已無單車':
                return dangerTag;
            case '單車已滿' || '暫停營運':
                return warnrTag;
            case '停止營運':
                return muteTag;
            default:
                return null;
        }
    }
    return (
        <TagWrapper style={{...tagColor(tagType(type))}}>
            <p>{tagType(type)}</p>
        </TagWrapper>
    )
}

const dangerTag = {
    color: COLOR.red.default,
    background: COLOR.red.light,
    borderColor: COLOR.red.default
}

const warnrTag = {
    color: COLOR.orange.default,
    background: COLOR.orange.light,
    borderColor: COLOR.orange.default
}

const muteTag = {
    color: COLOR.gray.level700,
    background: COLOR.gray.level300,
    borderColor:COLOR.gray.level700
}


export default Tag;
