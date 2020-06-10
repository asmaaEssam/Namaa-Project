import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMapboxGl, { Layer, Popup, Feature } from "react-mapbox-gl";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFkd2FtYWhtb3VkIiwiYSI6ImNrYW94djcwaDB2MGsycnBmNzk2b2drOG4ifQ.PheG-NUHPUAizAxxdUNJZA",
});
const DashboardMap = () => {

  const geojson = {
    features: [
      {
        type: "Feature",
        properties: {
          Type: "Bus stop",
          name: "aaa"
        },
        geometry: {
          coordinates: [
            31.6447,
            30.090317
          ],
          type: "Point"
        },
        id: "b00e64982b69f0e4e1296d0129d59ef2"
      },
      {
        type: "Feature",
        properties: {
          Type: "Bus stop",
          name: "nnn"
        },
        geometry: {
          coordinates: [
            31.64964,
            30.084654
          ],
          type: "Point"
        },
        id: "c0b8cad7a8942bc497ef3226e8175411"
      },
      {
        type: "Feature",
        properties: {
          Type: "Bus stop",
          name: "ay haga"
        },
        geometry: {
          coordinates: [
            31.651327,
            30.086791
          ],
          type: "Point"
        },
        id: "e3792b37202bba9b5569faf61189152f"
      }
    ],
    type: "FeatureCollection"
  };

  const [state, setState] = useState(geojson);

  // useEffect(() => {
  //   //TODO currentUser in context or redux
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`/projects`, {});
  //     setState(data);
  //   };
  //   console.log(state);

  //   fetchData();
  // }, []);

  return (
    // in render()
    <React.Fragment>
        <Map
          style="mapbox://styles/mapbox/outdoors-v11"
          containerStyle={{
            height: "44.5vh",
          }}
          center={[31.6306, 30.0917]}
          zoom={[13]}
        >
              {/* <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[31.6306, 30.0917]}/>
        </Layer> */}
          {/* <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          ></Layer> */}
          {/* <Popup
            coordinates={[31.6306, 30.0917]}
            offset={{
              "bottom-left": [12, -38],
              bottom: [0, -38],
              "bottom-right": [-12, -38],
            }}
          >
            <img
              src="n08A8NO.jpg"
              width="100px"
              height="100px"
              alt="Smiley face"
            />
          </Popup> */}
          <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
          {
            state.features.map(feature => 
                <Feature coordinates={feature.geometry.coordinates}/>
            )
          }
            </Layer>
        </Map>
    </React.Fragment>
  );
};

export default DashboardMap;


// import React, { useRef, useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';

// // import './App.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA';

// const Map = () => {
//   const mapContainerRef = useRef(null);

//   // initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       // See style options here: https://docs.mapbox.com/api/maps/#styles
//       style: 'mapbox://styles/mapbox/dark-v10',
//       center: [-104.9876, 39.7405],
//       zoom: 12.5,
//     });

//     // add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

//     // clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return <div className="map-container" ref={mapContainerRef} />;
// };

// export default Map;

// import React, {useEffect} from "react";
// import mapboxgl from 'mapbox-gl';

// const Map =()=> {
  // const geojson = {
  //   type: 'FeatureCollection',
  //   features: [{
  //     type: 'Feature',
  //     geometry: {
  //       type: 'Point',
  //       coordinates: [-77.032, 38.913]
  //     },
  //     properties: {
  //       title: 'Mapbox',
  //       description: 'Washington, D.C.'
  //     }
  //   },
  //   {
  //     type: 'Feature',
  //     geometry: {
  //       type: 'Point',
  //       coordinates: [-122.414, 37.776]
  //     },
  //     properties: {
  //       title: 'Mapbox',
  //       description: 'San Francisco, California'
  //     }
  //   }]
  // };
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
