import React, { useState } from "react";
import ExamplesNavbar from "../components/ExamplesNavbar";
import Footer from "../components/Footer";
import Publictransportform from "../components/Publictransportform";
import Publictransportmap from "../components/Publictransportmap";
import "./layoutStyles.css";
import { Card, CardBody } from "reactstrap";

const Dataentrypublictransport = (props) => {
  const [state, setState] = useState([]);

  const setStateToFeature = (feature) => {
    // 3: state is the selected feature

    setState(feature);
  };
  console.log(props);
  return (
    <div>
      <ExamplesNavbar />
      <div className="page-header container" id="dataentry">
        <Card id="dataentryMap">
          <CardBody>
            <Publictransportmap
              setStateToFeature={setStateToFeature}
              style="mapbox://styles/asma163/ckbgkzh7457611io4q6k872re"
              center={[31.6306, 30.0917]}
              height="39.5vw"
            />
          </CardBody>
        </Card>
        <Publictransportform stateFromDataEntry={state} />
      </div>
      <Footer />
    </div>
  );
};

export default Dataentrypublictransport;
