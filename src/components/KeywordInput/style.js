import styled from 'styled-components';
import {FONTSIZE, COLOR} from '../../constants/variables'

export const Input = styled.div`
    position: relative;
    input{
        width: 100%;
        font-size: ${FONTSIZE.fz_l};
        background: ${COLOR.gray};
        border: 1px solid ${COLOR.primary.primary};
        border-radius: 0.25rem;
        display: block;
        padding: 0.6rem 0.6rem 0.6rem 3rem;
        margin-bottom: 0.75rem;
        &:focus{
            outline-color: ${COLOR.primary.primary};
        }
    }
`
export const Icon = styled.div`
    height: 20px;
    color: ${COLOR.primary.primary};
    border-right: 1px solid #E5E5E5;
    padding: 0 0.6rem;
    position: absolute;
    inset: calc(50% - 10px) auto auto 0;
    svg{
        width: 100%;
        height: 100%;
    }
`
