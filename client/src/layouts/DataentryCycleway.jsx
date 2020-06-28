import React from 'react'
import ExamplesNavbar from '../components/ExamplesNavbar'
import Footer from '../components/Footer'
import Cyclewaymap from '../components/Cyclewaymap'
import Cyclewayform from'../components/Cyclewayform'
import './layoutStyles.css';
import DashboardMap from '../components/Map';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";

const DataentryCycleway = (props) => {
   
    console.log(props)
    return ( 
    <div>     
      <ExamplesNavbar/>
                <div className="page-header container" id='dataentry'>
                    <Card id="dataentryMap">
                        <CardBody>
                            <Cyclewaymap />
                        </CardBody>
                    </Card> 
                    <Cyclewayform/>
                </div>
        <Footer/>
        </div>
     );
}
 
export default DataentryCycleway;