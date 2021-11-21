import styled from 'styled-components';
import {FONTSIZE, COLOR} from '../../constants/variables'

export const TagWrapper = styled.div`
    color: ${COLOR.primary.dark};
    font-size: ${FONTSIZE.fz_m};
    background: ${COLOR.primary.tint};
    border: 2px solid ${COLOR.primary.dark};
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    margin-right: 1.25rem;
    display: inline-block;

`