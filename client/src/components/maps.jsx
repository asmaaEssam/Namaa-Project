import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Layer, Feature, Popup } from "react-mapbox-gl";
import "../index.css";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA",
});

function Maps(props) {
  // 1: map state contains projects
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:9000/footpath/", {})
        .then((res) => {
          console.log(res.data);
          setState(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();

    console.log(state);
  }, []);

  const handleClick = (feature) => {
    console.log(feature);
    // 2: on click the state of the parent element (dataentry) is changed into clicked feature
    props.setStateToFeature(feature);
  };
  const onDrawCreate = ({ features }) => {
    console.log({ ...features });
    props.setStateToFeature(features[0]);
  };

  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };

  return (
    <div>
      <Map
        center={[31.6306, 30.0917]}
        zoom={[14]}
        style="mapbox://styles/mapbox/satellite-v9" // eslint-disable-line
        containerStyle={{
          height: "39.5vw",
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
        {state.map((p) => (
          <Marker
            {...p}
            coordinates={p.geometry.coordinates[0]}
            onClick={() => handleClick(p)}
            anchor="bottom"
            offset={[14, 0]}
          >
            <div className="mapMarkerStyle" />
          </Marker>
        ))}

        <Layer
          type="line"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "blue",
            "line-width": 3,
          }} // eslint-disable-next-line
        >
          {state.map((p) => (
            <Feature {...p} coordinates={p.geometry.coordinates} />
          ))}
        </Layer>
      </Map>
    </div>
  );
}
export default Maps;
