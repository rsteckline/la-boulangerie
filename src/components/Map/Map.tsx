import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import countriesGeoJson from '../../data/countries.json';
import './Map.css';

const MapComponent = () => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=a7eda3efcc6b40449d697372a8171c3b"
        attribution='&copy; <a href="http://thunderforest.com">Thunderforest</a> contributors'
        noWrap={true}
      />
      <GeoJSONLayer />
    </MapContainer>
  );
};

const GeoJSONLayer = () => {
  const map = useMap();

  useEffect(() => {
    const geoJsonLayer = L.geoJSON(countriesGeoJson as any, {
      style: () => ({
        fillColor: "rgba(62, 109, 78, 0.5)",
        color: '#3e6d4e',
        weight: 1,
        dashArray: '3',
        fillOpacity: 0.5
      }),
      onEachFeature: (feature, layer) => {

        layer.on({
          mouseover: (e) => {
            var layer = e.target;
            layer.setStyle({
              fillColor: "rgba(62, 109, 78, 0.5)",
              weight: 3,
              opacity: 1,
              color: '#3e6d4e',
              dashArray: '3',
              fillOpacity: 0.7
            });
          },
          mouseout: (e) => {
            var layer = e.target;
            geoJsonLayer.resetStyle(layer);
          }
        });
      
        if (feature.properties && feature.properties.name) {
          if (layer instanceof L.Polygon || layer instanceof L.Polyline) {
            const center = layer.getBounds().getCenter();
            const marker = L.marker(center, {
              icon: new L.DivIcon({
                className: 'country-label',
                html: `<div>${feature.properties.name}</div>`,
                iconSize: L.point(100, 40),
                iconAnchor: [40, 20]
              })
            });
            marker.addTo(map)
          }
        }
      },
    })

    geoJsonLayer.addTo(map)
  }, [map])

  return null;
}

export default MapComponent
