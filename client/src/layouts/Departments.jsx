import React from 'react'
import Users from '../components/Userui.jsx'
import AdminNavbar from '../components/AdminNavbar.jsx';
import {Card, CardBody } from 'reactstrap';

const Departments = () => {
    return ( 
        <>
        <AdminNavbar/>
        <div className='page-header container' id='adminProjects'>
            <Card>
                <CardBody>
                    <Users/>
                </CardBody>
            </Card>
        </div>
        </>
     );
}
 
export default Departments;