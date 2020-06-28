import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useEffect, useState} from "react";
import axios from "axios";
import { Layer,Feature, Popup} from "react-mapbox-gl";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";

const Map = ReactMapboxGl({
  accessToken:"pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA"
});


function Publictransportmap(props) {
  console.log(props.setStateToFeature)
  const [state, setState] = useState([]);

  useEffect(() => {
   const fetchData= async () => {

     await axios
       .get("http://localhost:9000/publictrans/",{})
       .then((res) => {
         console.log(res.data);
         setState(res.data)
        
       })
       .catch((error) => {
         console.log(error);
       });
      
   };
   fetchData();
   
 console.log(state)
 }, []);

const handleClick=(feature)=>{
props.setStateToFeature(feature)
console.log(feature)
}
 const onDrawCreate = ({ features }) => {
   console.log(features);
 };
 
  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };
  
  return (
    <div>
      <Map
      center={[31.6306, 30.0917]}
      zoom={[13]}
        style='mapbox://styles/mapbox/satellite-v9' // eslint-disable-line
        containerStyle={{
          height: "39.5vw",
          
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
       
        <Layer
        
        // eslint-disable-next-line
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15" }}>
        
        {
          state.map(feature => 
            <Feature coordinates={feature.geometry.coordinates} onClick={()=>handleClick(feature)}/>
        )
        }
        </Layer>
      </Map>
    </div>
  );
}
export default Publictransportmap;
