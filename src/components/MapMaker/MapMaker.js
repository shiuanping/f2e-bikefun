import L from 'leaflet';
import selectedIcon from '../../assets/img/Icon/maker/selected.png'
import bikeIcon from '../../assets/img/Icon/maker/bike.png'

export const selectedMarker = L.icon({
    iconUrl: selectedIcon,
    // shadowUrl: 'leaf-shadow.png',
    iconSize:     [48, 48], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [12, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export const bikeMarker = L.icon({
    iconUrl: bikeIcon,
    // shadowUrl: 'leaf-shadow.png',
    iconSize:     [48, 48], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [12, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});