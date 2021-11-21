import styled from 'styled-components';
import {COLOR} from '../../constants/variables'

export const AreaWrapper = styled.div`
    width: 87%;
    background: ${COLOR.white};
    margin: 24px auto; 
    border-radius: 8px;
    overflow: hidden;
`
export const AreaHeader = styled.div`
    height: 24px;
    background: ${COLOR.primary.primary};
`
export const AreaTitle = styled.h2`
    color: ${COLOR.primary.dark};
    font-weight: 700;
    margin-bottom: 1rem; 
`

export const AreaBody = styled.div`
    padding: 1rem;
`
export const SelectorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SearchBtn = styled.button`
    width: 48%;
    color: ${COLOR.white};
    font-weight: 700;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: ${COLOR.primary.primary};
    cursor: pointer;
`
