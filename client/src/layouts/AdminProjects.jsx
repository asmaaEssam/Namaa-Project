import React,{useEffect,useState} from 'react'
import Table from '../components/Table'
// import Map from '../components/Map';
import ExamplesNavbar from '../components/ExamplesNavbar';
// import Footer from '../components/Footer'
import {Card,Row, CardBody, Col } from 'reactstrap';
import Footer from '../components/Footer';
import DrawControl from "react-mapbox-gl-draw";
import { Layer,Feature, Popup} from "react-mapbox-gl";
import ReactMapboxGl from "react-mapbox-gl";
import axios from 'axios';
// import "../assets/scss/blk-design-system-react.scss";
// import "../assets/css/nucleo-icons.css";
const Map = ReactMapboxGl({
    accessToken:"pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA"
  });

const AdminProjects = (props) => {

    const [state,setState] = useState([]) ;

    const fetchData = async () => {
      const result = await axios.get(
        'http://localhost:9000/projects/',
      );
      setState(result.data);
      console.log(result.data)
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    //  async function addProject (newProject){
    //   const result = await axios.post(
    //     'http://localhost:9000/projects/add',newProject
    //   );
    //   setState({columns: state.columns,
    // data:[...state.data , result.data]});
    // };

const handleClick=(feature)=>{
props.setStateToFeature(feature)
console.log(feature)
}
async function addProject (newProject){
    const result = await axios.post(
      'http://localhost:9000/projects/add',newProject
    );
    setState([...state , result.data]);
  };
 const onDrawCreate = ( {features} ) => {
   console.log(features);
   const project = {category:"",name:"",}

 };
 
  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };
    return ( 
        <>
      <ExamplesNavbar/>
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
                        <Map
      center={[31.6306, 30.0917]}
      zoom={[13]}
        style="mapbox://styles/asma163/ckbgkzh7457611io4q6k872re" // eslint-disable-line
        containerStyle={{
          height: "39.5vw",
          
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
       
        {/* <Layer type="circle" id="marker" paint={{
  'circle-color': "#e14eca",
  'circle-stroke-width': 1,
  'circle-stroke-color': '#fff',
  'circle-stroke-opacity': 1
 }}>
        
        {
          state.map(feature => 
            <Feature coordinates={feature.location.coordinates} onClick={()=>handleClick(feature)}/>
        )
        }
        </Layer> */}
      </Map>
                        </CardBody>
                    </Card>
                    </Col>
        </Row>
        </div>
        <Footer/>
        </>
     );
}
 
export default AdminProjects;