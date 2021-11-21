import styled from 'styled-components';
import {COLOR} from '../../constants/variables'

export const SideBarWrapper = styled.div`
    width: 390px;
    height: calc(100% - 70px);
    position: absolute;
    left: 0;
    overflow: hidden;
    z-index: 5;
`
export const SideBar = styled.div`
    background: ${COLOR.white};
    position: absolute;
    inset: -1;
    z-index: 5;
    box-shadow: 4px 0px 10px rgba(38, 38, 38, 0.2);
`
export const MapWrapper = styled.div`
    /* width: 100vw;
    height: 100vh;
    background: gray; */
`