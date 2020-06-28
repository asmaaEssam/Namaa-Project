import React from 'react'
import ExamplesNavbar from '../components/ExamplesNavbar'
import Footer from '../components/Footer'
import Stormwaterform from '../components/Stormwaterform'
import Stormwatermap from'../components/Stormwatermap'
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

const Dataentrystormwater = (props) => {
   
    console.log(props)
    return ( 
    <div>       
      <ExamplesNavbar/>
                <div className="page-header container" id='dataentry'>
                    <Card id="dataentryMap">
                        <CardBody>
                            <Stormwatermap />
                        </CardBody>
                    </Card> 
                    <Stormwaterform/>
                </div>
        <Footer/>
        </div>
     );
}
 
export default Dataentrystormwater;