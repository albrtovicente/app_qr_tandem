import React, { useState, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
const Mapa = ({ setLatLng }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      const L = require('leaflet');

      // Arreglar el problema de los iconos que no se muestran
      import('leaflet/dist/images/marker-icon.png');
      import('leaflet/dist/images/marker-icon-2x.png');
      import('leaflet/dist/images/marker-shadow.png');

      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
        iconUrl: require('leaflet/dist/images/marker-icon.png').default,
        shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
      });
    }
  }, [isClient]);

  const LocationMarker = ({ setLatLng }) => {
    const map = useMap();

    useEffect(() => {
      const handleClick = (e) => {
        setLatLng(e.latlng);
      };

      map.on('click', handleClick);

      // Limpiar el evento cuando el componente se desmonte
      return () => {
        map.off('click', handleClick);
      };
    }, [map, setLatLng]);

    return null;
  };

  return (
    <>
      {isClient && (
        <MapContainer center={[40.030501, -3.604052]} zoom={13} style={{ height: '50vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker setLatLng={setLatLng} />
        </MapContainer>
      )}
    </>
  );
};

export default Mapa;