"use client";

import { useEffect } from "react";
import L from "leaflet";

const MapComponent = () => {
  useEffect(() => {
    const map = L.map("map").setView([5.347, -4.024], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    const marker = L.marker([5.347, -4.024]).addTo(map);
    marker.bindPopup("<b>Yopougon Koweit</b>").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "600px", width: "100%" }} />;
};

export default MapComponent;
