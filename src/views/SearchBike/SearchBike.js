import React, {useState, useEffect} from 'react';
//modules
import { MapContainer, TileLayer, ZoomControl, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//icon
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
//css
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css'
//components
import { bikeMarker } from '../../components/MapMaker/MapMaker'
import SearchArea from '../../components/SearchArea/SearchArea'
import { SideBarWrapper, SideBarInner, SideBar, CardWrapper, PopupTitle, PopupInfo, PopupInfoItem, Icon, PopupTagWrapper, BikeStatusWrapper, BikeStatus, BikeStatusTitle, BikeStatusNumber } from './style'
import BikeCard from '../../components/BikeCard/BikeCard';
import Tag from '../../components/Tag/Tag';
//data
import {cityData} from '../../data/data'
//mixin
import {GetAuthorizationHeader} from '../../mixin/mixin'
function SetCenter(props) {
  const [latitude, longitude] = props.currentPos;
  const map = useMap();
  map.setView([latitude, longitude], map.getZoom())
  return null
}

const SearchBike = () => {
  const [data, setData] = useState([]);
  const [currentCity, setCurrentCity] = useState('Taipei');
  const [currentPos, setCurrentPos] = useState([25.09108, 121.5598]);
  const [searchStatus, setSearchStatus] = useState(false);
  const [stationDetail, setStationDetail] = useState([]);
  const [keyword, setKeyword] = useState('');
  useEffect(() =>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentCity])
  useEffect(() =>{
    const currentCityData = (cityData.filter(item => item.value.includes(currentCity)))[0];
    const { latitude, longitude } = currentCityData;
    setCurrentPos([latitude, longitude]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])
  const getData = () => {
    if (!currentCity) return;
    fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/${currentCity}?$format=JSON`, {headers: GetAuthorizationHeader()}).then(res=>res.json()).then((res)=>{
        setData(res);
        if(keyword !== '') {
          setData(res.filter(item => JSON.stringify(item).includes(keyword) ))
        }
        getDetail();
    });
  }
  const getDetail = () => {
    fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/${currentCity}?$format=JSON`, {headers: GetAuthorizationHeader()}).then(res=>res.json()).then((res)=>{
        setStationDetail(res);
    });
  };
  const getStation = (StationID) => {
    return (data.filter((item) => item.StationID === StationID))[0]
  }
  const getStationDetail = (StationID) => {
    return (stationDetail.filter((item) => item.StationID === StationID))[0]
  } 
  let makers = data.map((item, index) => {
    const { PositionLat, PositionLon } = item.StationPosition;
    const detail = getStationDetail(item.StationID) ? getStationDetail(item.StationID): null;
    return (
    <Marker position={[PositionLat, PositionLon]} icon={bikeMarker} key={index}>
      <Popup>
        <PopupTitle>{item.StationName.Zh_tw}</PopupTitle>
        <PopupInfo>
          <PopupInfoItem>
            <Icon>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </Icon>
            <p>{item.StationAddress.Zh_tw}</p>
          </PopupInfoItem>
          <PopupInfoItem>
            <Icon>
              <FontAwesomeIcon icon={faHistory} />
            </Icon>
            <p>{item.UpdateTime}</p>
          </PopupInfoItem>
        </PopupInfo>
        <PopupTagWrapper>
        <Tag type={'service'} serviceStatus={detail ? detail.ServiceStatus: null} availableRentBikes={detail ? detail.AvailableRentBikes: null} availableReturn={detail ? detail.AvailableReturnBikes: null}></Tag>
        <Tag type={'rent'} serviceStatus={detail ? detail.ServiceStatus: null} availableRentBikes={detail ? detail.AvailableRentBikes: null} availableReturn={detail ? detail.AvailableReturnBikes: null}></Tag>
        </PopupTagWrapper>
        <BikeStatusWrapper>
          <BikeStatus>
            <BikeStatusTitle>可借單車</BikeStatusTitle>
            <BikeStatusNumber>{detail ? detail.AvailableRentBikes: null}</BikeStatusNumber>
          </BikeStatus>
          <BikeStatus>
            <BikeStatusTitle>可停空位</BikeStatusTitle>
            <BikeStatusNumber>{detail ? detail.AvailableReturnBikes: null}</BikeStatusNumber>
          </BikeStatus>
        </BikeStatusWrapper>
      </Popup>
    </Marker>)
  })
  let cards = data.map((item, index) => <BikeCard key={index} searchStatus={searchStatus} station={getStation(item.StationID)} detail={getStationDetail(item.StationID)}></BikeCard>)
  return (
    <>
    <SideBarWrapper style={searchStatus? {...SideBarWrapperActive} : null}>
      <SideBar style={searchStatus? {...SideBarActive} : null} />
      <SideBarInner>
        <SearchArea searchType="bike" getData={getData} setCurrentCity={setCurrentCity} setSearchStatus={setSearchStatus}
          searchStatus={searchStatus} setKeyword={setKeyword}/>
        <CardWrapper  style={searchStatus? {display:'flex'} : {display:'none'}} >
          {data.length === 0 && <p>找不到符合此搜尋相關的內容</p>}
          {cards}
        </CardWrapper>
       </SideBarInner>
    </SideBarWrapper>
    <MapContainer center={currentPos} zoom={14} style={{...mapWrapper}} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position='bottomright' />
      <MarkerClusterGroup>
      {makers}
      </MarkerClusterGroup>
      <SetCenter  currentPos={currentPos}/>
    </MapContainer>
    </>
  );
}

const mapWrapper = {
  width: '100vw',
  height: 'calc(100vh - 70px)',
  marginTop: '70px',
  zIndex: 0
}

const SideBarActive = {
  background: '#fff',
}
const SideBarWrapperActive = {
  boxShadow: '0px 0px 10px rgba(38, 38, 38, 0.25)'
}

export default SearchBike;
