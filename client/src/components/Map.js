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
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`/projects`, {});
  //     setState(data);
  //   };
  //   console.log(state);

  //   fetchData();
  // }, []);

  return (
    <React.Fragment>
        <Map
          style="mapbox://styles/mapbox/outdoors-v11"
          containerStyle={{
            height: "44.5vh",
          }}
          center={[31.6306, 30.0917]}
          zoom={[13]}
        >
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