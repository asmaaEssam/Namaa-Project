import React, { useState } from "react";
import ExamplesNavbar from "../components/ExamplesNavbar";
import Footer from "../components/Footer";
import Maps from "../components/maps";
import Forms from "../components/Forms";
import "./layoutStyles.css";
import DashboardMap from "../components/Map";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

const DataEntry = (props) => {
  const [state, setState] = useState([]);

  const setStateToFeature = (feature) => {
    // 3: state is the selected feature

    setState(feature);
  };
  return (
    <div>
      <div className="page-header container" id="dataentry">
        <Card id="dataentryMap">
          <CardBody>
            <Maps setStateToFeature={setStateToFeature} />
          </CardBody>
        </Card>
        {/* // 4: feature data is passed to forms */}
        <Forms stateFromDataEntry={state} />
      </div>
      <Footer />
    </div>
  );
};

export default DataEntry;
