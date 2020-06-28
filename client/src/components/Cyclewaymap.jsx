import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useEffect, useState} from "react";
import axios from "axios";
import { Layer,Feature, Popup} from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:"pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA"
});


function Cyclewaymap(props) {
  console.log(props.setStateToFeature)
  const [state, setState] = useState([]);

  useEffect(() => {
   const fetchData= async () => {

     await axios
       .get("http://localhost:9000/cycleway/",{})
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
        {/* {state.map((p) => (
            <Popup{...p} coordinates={p.geometry.coordinates[0]} onClick={()=>handleClick(p)}  anchor="top-right" offset={[9,0]} />
       
           ) )} */}
          
        <Layer
        
          type="line"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "blue",
            "line-width": 3,
            
          }}// eslint-disable-next-line
          
        >
        
          {state.map((p,) => (
            <Feature{...p} coordinates={p.geometry.coordinates}  />
       
           ) )
          
          
          }
         
        </Layer>
      </Map>
    </div>
  );
}
export default Cyclewaymap;
