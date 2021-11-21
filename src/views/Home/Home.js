import { PrimaryVector, WhiteVector, Banner, BannerInner, BannerContent, LOGO, Slogan, SelectorWrapper, SearchBtn } from "./style";
import logo from '../../assets/img/LOGO.svg';
import BannerVectorPrimary from '../../assets/img/Home/BannerVector_primary.svg'
import BannerVectorWhite from '../../assets/img/Home/BannerVector_white.svg'
import KeywordInput from "../../components/KeywordInput/KeywordInput";
import CitySelector from "../../components/CitySelector/CitySelector";
import { Link } from 'react-router-dom';

const HOME = () => {
  return (
  <>
  <PrimaryVector>
        <img src={BannerVectorPrimary} alt="logo" />
      </PrimaryVector>
      <WhiteVector>
        <img src={BannerVectorWhite} alt="logo" />
      </WhiteVector>
    <Banner>
      <BannerInner>
        <BannerContent>
          <LOGO>
            <img src={logo} alt="logo" />
          </LOGO>
          <Slogan>尋找單車,<br />來場悠閒的放鬆之旅!</Slogan>
          <KeywordInput />
          <SelectorWrapper>
            <CitySelector />
            <Link to="/SearchBike" style={{width: '48%'}}>
              <SearchBtn style={{width: '100%'}}>搜尋</SearchBtn>
            </Link>
          </SelectorWrapper>
        </BannerContent>
      </BannerInner>
    </Banner>
    </>
  );
}

export default HOME;
