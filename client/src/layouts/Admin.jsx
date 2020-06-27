import React from 'react'
import {useEffect} from 'react'
import AdminNavbar from '../components/ExamplesNavbar.js'
import { useLocation } from "react-router-dom";
const Admin = (props) => {
    const location = useLocation();

    useEffect(() => {
        console.log("object")
       console.log(location.state.data); // result: 'some_value'
    }, [location]);

    return ( 
        <>
        </>
     );
}
 
export default Admin;