import styled from 'styled-components';
import {FONTSIZE, COLOR} from '../../constants/variables'

export const Card = styled.div`
    width: 97%;
    font-size: ${FONTSIZE.h5};
    font-weight: 700;
    background: ${COLOR.gray.level100};
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 0.75rem;
`
export const CardTitle = styled.div`
    background: ${COLOR.gray};
    margin-bottom: 0.75rem;
`
export const CardLocation = styled.div`
    display: flex;
    margin-bottom: 0.875rem;
    p{
        font-size: ${FONTSIZE.fz_m};
        line-height: 1.5rem;
    }
`

export const Icon = styled.span`
    color: ${COLOR.primary.primary};
    display: inline-block;
    font-size: ${FONTSIZE.h5};
    margin-right: 0.5rem;
`