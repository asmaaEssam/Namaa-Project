import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";


const Map = ReactMapboxGl({
  accessToken:"pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA"
});


function Maps() {
  const onDrawCreate = ({ features }) => {
    console.log(features);
  };

  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };
  // const ._onClickMap((Maps, evt)=> {
  //   console.log(evt.lngLat);
  // })
  return (
    <div id="dataentryMap">
      <Map
      //onClick={this._onClickMap}
      center={[31.6306, 30.0917]}
      zoom={[13]}
        style='mapbox://styles/asma163/ckbgkzh7457611io4q6k872re' // eslint-disable-line
        containerStyle={{
          height: "500px",
          width: "45vw",
          
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
      </Map>
    </div>
  );
}
export default Maps;
