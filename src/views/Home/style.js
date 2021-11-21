import styled from 'styled-components';
import {FONTSIZE, COLOR} from '../../constants/variables'

export const PrimaryVector = styled.div`
    position: absolute;
    inset: auto auto 0 0;
`

export const WhiteVector = styled.div`
    position: absolute;
    inset: 0 0 auto auto;
`

export const Banner = styled.div`
    height: 100vh;
    padding: 120px 0;
    overflow: hidden;
    position: relative;
    z-index: 5;
`
export const BannerInner = styled.div`
    width: 70%;
    margin: 0 auto;
`

export const BannerContent = styled.div`
    max-width: 430px;
`

export const LOGO = styled.div`
    width: 200px;
    margin-bottom: 0.5rem;
`

export const Slogan = styled.h2`
    color: ${COLOR.primary.primary};
    font-size: ${FONTSIZE.h1};
    font-weight: 700;
    margin-bottom: 2.5rem;
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

