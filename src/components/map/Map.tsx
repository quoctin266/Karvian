"use client";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "250px",
};

const center = {
  lat: 16.012397677026115,
  lng: 108.23980745357241,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {/* Child components, such as markers, info windows, etc. */}
      <MarkerF position={center} title="Karvian" />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
