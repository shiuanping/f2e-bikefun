import React, {useState} from 'react';
import { AreaWrapper, AreaHeader, AreaTitle, AreaBody, SelectorWrapper, SearchBtn } from "./style";
//components
import KeywordInput from '../KeywordInput/KeywordInput';
import CitySelector from '../CitySelector/CitySelector'
const SearchArea = (props) => {
    const { searchType, setCurrentCity, setSearchStatus, searchStatus, setKeyword } = props;
    const [tmpCity, setTmpCity] = useState('');
    const search = () =>{
        setCurrentCity(tmpCity);
        setTimeout(() => {
            setSearchStatus(true);
        }, 900);
    }
    return (
        <AreaWrapper style={searchStatus?{...SearchAreaActive}:null }>
            <AreaHeader />
            <AreaBody>
                <AreaTitle>{searchType==='bike' ? '搜尋單車': '搜尋車道'}</AreaTitle>
                <KeywordInput setKeyWord={setKeyword} />
                <SelectorWrapper>
                    <CitySelector setTmpCity={setTmpCity} />
                    <SearchBtn onClick={search}>搜尋</SearchBtn>
                </SelectorWrapper>
            </AreaBody>
        </AreaWrapper>
    )
}
const SearchAreaActive = {
    boxShadow: '0px 0px 10px rgba(38, 38, 38, 0.25)'
}

export default SearchArea;
