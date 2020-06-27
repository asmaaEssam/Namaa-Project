import React from 'react'
import ExamplesNavbar from '../components/ExamplesNavbar'
import Footer from '../components/Footer'
import Maps from '../components/maps';
import Forms from '../components/Forms'
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

const DataEntry = (props) => {
    console.log(props)
    return ( 
    <div>        
                <div className="page-header container" id='dataentry'>
                    <Card id="dataentryMap">
                        <CardBody>
                            <Maps/>
                        </CardBody>
                    </Card> 
                    <Forms/>
                </div>
        <Footer/>
        </div>
     );
}
 
export default DataEntry;