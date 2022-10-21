import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[41.34075, 69.213983]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[41.328473, 69.207942]}>
        <Popup>This is my house location</Popup>
      </Marker>
      <Marker position={[41.350588534839844, 69.21961499700856]}>
        <Popup>This is Smart Base location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
