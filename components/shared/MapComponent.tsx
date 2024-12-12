// components/MapComponent.tsx
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    // Initialisation de la carte
    const map = L.map("map").setView([5.347, -4.024], 13); // Coordonnées pour Yopougon Oasis

    // Ajout d'une couche de tuiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    // Ajout d'un marqueur
    const marker = L.marker([5.347, -4.024]).addTo(map);
    marker.bindPopup("<b>Yopougon Oasis</b>").openPopup();

    // Nettoyage lors du démontage du composant
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "600px", width: "100%" }} />;
};

export default MapComponent;
