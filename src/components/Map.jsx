import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await axios.get('https://disease.sh/v3/covid-19/countries');
        setCountries(result.data);
      } catch (error) {
        console.error("Error fetching the country data", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countries.map((country) => (
        <Marker
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={
            L.icon({
              iconUrl: country.countryInfo.flag,
              iconSize: [20, 20],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
              shadowSize: [41, 41]
            })
          }
        >
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <img src={country.countryInfo.flag} alt={`${country.country} Flag`} style={{ maxWidth: '100px' }} />
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
