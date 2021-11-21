import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet'
//components
import { selectedMarker } from '../../components/MapMaker/MapMaker'
import SearchArea from '../../components/SearchArea/SearchArea'

import { SideBarWrapper, SideBar } from './style'
const SearchBike = () => {
  return (
    <>
    <SideBarWrapper>
      <SideBar />
      <SearchArea searchType="lane"/>
    </SideBarWrapper>
    <MapContainer center={[25.033710, 121.564718]} zoom={18} style={{...mapWrapper}} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position='bottomright' />
      <Marker position={[25.033710, 121.564718]} icon={selectedMarker}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
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

export default SearchBike;
