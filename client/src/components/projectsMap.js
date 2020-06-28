import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMapboxGl, { Layer, Popup } from "react-mapbox-gl";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ComponentsNavbar from "../components/IndexNavbar";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import ExamplesNavbar from "./ExamplesNavbar.js";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#181A43",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "80vh",
  },
});

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFkd2FtYWhtb3VkIiwiYSI6ImNrYW94djcwaDB2MGsycnBmNzk2b2drOG4ifQ.PheG-NUHPUAizAxxdUNJZA",
});
const ProjectsMap = (props) => {
  const classes = useStyles();

  const [state, setState] = useState([]);

  useEffect(() => {
    //TODO currentUser in context or redux
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:9000/projects`, {});
      console.log(data)
      setState(data);
    };
    console.log(state);

    fetchData();
  }, []);

  return (
    // in render()
    <React.Fragment>
      <ExamplesNavbar/>
      <div style={{marginTop: "10%", marginBottom:"5%", display:"flex", justifyContent:'center'}}>
      <Box>
        <Map
          style="mapbox://styles/mapbox/light-v10"
          containerStyle={{
            position: "relative",
            height: "50vh",
            width: "70vw",
            borderRadius: "10px",
          }}
          center={[31.6306, 30.0917]}
          zoom={[13]}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          ></Layer>
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
          {state[0] !== undefined ? (
            state.map((p, i) => (
              <Popup
                onClick={() => {
                  console.log(props.history)
                  console.log(props.history)
                  console.log(props.history.location.pathname)
                  if(localStorage.getItem('token')&&localStorage.getItem('role')=== 'DataEntry'&&props.history.location.pathname === '/project/publictransport')
                  {
                    props.history.push("/dataEntry/publictransport");
                  }
                  else if(localStorage.getItem('token')&&localStorage.getItem('role')=== 'DataEntry'&&props.history.location.pathname === '/project/footpath'){
                    props.history.push('/dataEntry/footpath');
                  }else if(localStorage.getItem('token')&&localStorage.getItem('role')=== 'DataEntry'&&props.history.location.pathname === '/project/stormwater'){
                    props.history.push('/dataEntry/stormwater');
                  } else if(localStorage.getItem('token')&&localStorage.getItem('role')=== 'DecisionMaker')
                  {
                    props.history.push("/dashboard");
                  } else {
                    props.history.push("/home");
                  }
                }}
                coordinates={p.location.coordinates}
                offset={{
                  "bottom-left": [12, -38],
                  bottom: [0, -38],
                  "bottom-right": [-12, -38],
                }}
              >
                <img
                  src={`project${i}.jpg`}
                  width="100px"
                  height="100px"
                  alt="Smiley face"
                />
              </Popup>
            ))
          ) : (
            <Popup
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
            </Popup>
          )}
        </Map>
      </Box>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default ProjectsMap;
