import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWVubmFheW1hbiIsImEiOiJja2I1anpjNXIwdGpmMnJvOXJiZWNzMm90In0.doC5cK7Oe_4O5kHls6lhWg"
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
    <div>
      <h2>Welcome to react-mapbox-gl-draw</h2>
      <Map
      //onClick={this._onClickMap}
      center={[31.662533,30.096655]}
        style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
        containerStyle={{
          height: "600px",
          width: "50vw",
          
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
      </Map>
    </div>
  );
}
export default Maps;
