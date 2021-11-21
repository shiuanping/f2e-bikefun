import styled from 'styled-components';
import {FONTSIZE, COLOR} from '../../constants/variables'


export const Header = styled.header`
    width: 100%;
    background: ${COLOR.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    position: absolute;
    inset: 0 0 auto auto;
    z-index: 10;
    box-shadow: 0px 4px 10px rgba(38, 38, 38, 0.25);
`
export const LOGO = styled.h1`
    width: 103px;
    a{
        display: flex;
        padding: 0.25rem 0;
    }
`

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const Button = styled.button`
    color: ${COLOR.primary.primary};
    font-size: ${FONTSIZE.fz_l};
    font-weight: bold;
    background: transparent;
    border: 0;
    border-radius: 0.25rem;
    padding: .5rem 1rem;
    margin: 0 0.75rem;
    cursor: pointer;
    outline: none;
    &:hover{
        color: ${COLOR.primary.light};
        background: ${COLOR.primary.tint};
    }
`;