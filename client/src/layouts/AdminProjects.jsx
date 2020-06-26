import React from 'react'
import Table from '../components/Table'
import Map from '../components/Map';
import AdminNavbar from '../components/AdminNavbar';
// import Footer from '../components/Footer'
import {Card,Row, CardBody, Col } from 'reactstrap';

const AdminProjects = (props) => {
    return ( 
        <>
        <AdminNavbar/>
        <div className='page-header container'  id='adminProjects'>
                <Row>
                    <Col lg='8'>
                    <Card>
                        <CardBody>
                            <Table state={props.state} setState={props.setState} style={{width:"100%"}} />
                        </CardBody>
                    </Card>
                    </Col>
                    <Col lg='4'>
                    <Card>
                        <CardBody>
                            <Map height="60vh" style = "mapbox://styles/asma163/ckbgkzh7457611io4q6k872re" accessToken= "pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA"/>
                        </CardBody>
                    </Card>
                    </Col>
        </Row>
        </div>
        </>
     );
}
 
export default AdminProjects;