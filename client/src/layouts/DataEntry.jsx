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
    <div id='dataentry'>
        <ExamplesNavbar/>
        <Row>
                <div>
                    <Card>
                        <CardBody>
                            <Maps/>
                        </CardBody>
                    </Card>
                </div>
            <Forms/>
        </Row>
        </div>
     );
}
 
export default DataEntry;