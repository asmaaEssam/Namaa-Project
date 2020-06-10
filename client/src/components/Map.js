import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// import './App.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA';

const Map = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;

// import React, {useEffect} from "react";
// import mapboxgl from 'mapbox-gl';

// const Map =()=> {
//   const geojson = {
//     type: 'FeatureCollection',
//     features: [{
//       type: 'Feature',
//       geometry: {
//         type: 'Point',
//         coordinates: [-77.032, 38.913]
//       },
//       properties: {
//         title: 'Mapbox',
//         description: 'Washington, D.C.'
//       }
//     },
//     {
//       type: 'Feature',
//       geometry: {
//         type: 'Point',
//         coordinates: [-122.414, 37.776]
//       },
//       properties: {
//         title: 'Mapbox',
//         description: 'San Francisco, California'
//       }
//     }]
//   };
//   mapboxgl.accessToken = 'pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA';
  
//   useEffect(() => {
//     var map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/light-v10',
//       center: [-96, 37.8],
//       zoom: 3
//     });
//     geojson.features.forEach(function(marker) {
//       console.log(marker)
//       // create a HTML element for each feature
//       let el = document.createElement('div');
//       el.className = 'marker';
      
//       // make a marker for each feature and add to the map
//       new mapboxgl.Marker(el)
//         .setLngLat(marker.geometry.coordinates)
//         .addTo(map);
      
//         new mapboxgl.Marker(el)
//         .setLngLat(marker.geometry.coordinates)
//         .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//           .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
//         .addTo(map);
//       });
//   }, [])

//     return (
//       <div id='map' />
//     );
//   }

// export default Map;
