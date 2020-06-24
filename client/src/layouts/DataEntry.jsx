import React from 'react'
import ExamplesNavbar from '../components/ExamplesNavbar'
import Maps from '../components/maps';
import Forms from '../components/Forms'
import './dataentry.css';
import DashboardMap from '../components/Map';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";

const DataEntry = () => {
    return ( 
    <div>
        <ExamplesNavbar/>
        
                <div className="page-header">
                    <div className="content" id='dataentry'>
                    <Card id="dataentryMap">
                        <CardBody>
                            <Maps/>
                        </CardBody>
                    </Card> 
                    <Forms/>
                    </div>
                </div>
        </div>
     );
}
 
export default DataEntry;