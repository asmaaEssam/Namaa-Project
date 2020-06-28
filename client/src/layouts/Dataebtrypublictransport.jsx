import React from 'react'
import ExamplesNavbar from '../components/ExamplesNavbar'
import Footer from '../components/Footer'
 import Publictransportform from '../components/Publictransportform'
 import Publictransportmap from'../components/Publictransportmap'
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

const  Dataentrypublictransport = (props) => {
   
    console.log(props)
    return ( 
    <div>  
      <ExamplesNavbar/>
                <div className="page-header container" id='dataentry'>
                    <Card id="dataentryMap">
                        <CardBody>
                            <Publictransportmap />
                        </CardBody>
                    </Card> 
                    <Publictransportform/>
                </div>
        <Footer/>
        </div>
     );
}
 
export default Dataentrypublictransport;