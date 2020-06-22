import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMapboxGl, { Layer, Popup, Feature } from "react-mapbox-gl";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";

const Map = ReactMapboxGl({
  accessToken:
  "pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA"
});
const DashboardMap = () => {

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
          style="mapbox://styles/asma163/ckbggndq8257h1irya7l12nzw"
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
          {
            state.features.map(feature => 
                <Feature coordinates={feature.geometry.coordinates}/>
            )
          }
            </Layer> */}
        </Map>
    </React.Fragment>
  );
};

export default DashboardMap;