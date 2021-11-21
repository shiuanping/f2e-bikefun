import styled from 'styled-components';
import { COLOR, FONTSIZE } from '../../constants/variables';

export const SideBarWrapper = styled.div`
    width: 390px;
    height: calc(100% - 70px);
    position: absolute;
    left: 0;
    overflow: hidden;
    z-index: 5;
`
export const SideBarInner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`


export const SideBar = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
    z-index: -1;
    transition: 1s;
`
export const CardWrapper = styled.div`
    width: 90%;
    height: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`

export const PopupTitle = styled.div`
    font-size: ${FONTSIZE.h5};
    font-weight: 700;
    margin-bottom: 0.875rem;
`
export const PopupInfo = styled.ul`
    list-style: none;
    margin-bottom: 0.875rem;
`
export const PopupInfoItem = styled.li`
    display: flex;
    margin-bottom: 0.3rem;
    p{
        font-size: ${FONTSIZE.fz_l};
    }
`

export const PopupTagWrapper = styled.div`
    margin-bottom: 1rem;
`

export const Icon = styled.span`
    color: ${COLOR.primary.primary};
    display: inline-block;
    font-size: ${FONTSIZE.h5};
    margin-right: 0.5rem;
`
export const BikeStatusWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BikeStatus = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${COLOR.primary.primary};
    border-radius: 4px;
    padding: 0.3rem 0;
`
export const BikeStatusTitle = styled.p`
    color: ${COLOR.primary.primary};
    font-size: ${FONTSIZE.fz_l};
    font-weight: 700;
    margin-bottom: 0.5rem;
`

export const BikeStatusNumber = styled.p`
    font-size: ${FONTSIZE.h3};
    font-weight: 700;
`